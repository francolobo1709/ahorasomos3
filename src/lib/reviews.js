import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

/**
 * Agregar una nueva reseña
 * @param {Object} reviewData - Datos de la reseña
 * @returns {Promise<string>} ID de la reseña creada
 */
export const addReview = async (reviewData) => {
  try {
    const reviewsRef = collection(db, 'reviews');
    const docRef = await addDoc(reviewsRef, {
      ...reviewData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    // Actualizar el rating promedio del trabajador
    await updateWorkerRating(reviewData.workerId);

    return docRef.id;
  } catch (error) {
    console.error('Error al agregar reseña:', error);
    throw error;
  }
};

/**
 * Obtener todas las reseñas de un trabajador
 * @param {string} workerId - ID del trabajador
 * @returns {Promise<Array>} Array de reseñas
 */
export const getWorkerReviews = async (workerId) => {
  try {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, where('workerId', '==', workerId));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error al obtener reseñas:', error);
    throw error;
  }
};

/**
 * Actualizar el rating promedio de un trabajador
 * @param {string} workerId - ID del trabajador
 */
const updateWorkerRating = async (workerId) => {
  try {
    const reviews = await getWorkerReviews(workerId);
    
    if (reviews.length === 0) return;

    // Calcular promedio
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    // Actualizar en el perfil del trabajador
    const workerRef = doc(db, 'users', workerId);
    await updateDoc(workerRef, {
      rating: Math.round(averageRating * 10) / 10, // Redondear a 1 decimal
      reviewsCount: reviews.length,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error al actualizar rating:', error);
    throw error;
  }
};

/**
 * Verificar si un usuario ya dejó una reseña para un trabajador
 * @param {string} userId - ID del usuario
 * @param {string} workerId - ID del trabajador
 * @returns {Promise<boolean>}
 */
export const hasUserReviewed = async (userId, workerId) => {
  try {
    const reviewsRef = collection(db, 'reviews');
    const q = query(
      reviewsRef, 
      where('userId', '==', userId),
      where('workerId', '==', workerId)
    );
    const snapshot = await getDocs(q);
    
    return !snapshot.empty;
  } catch (error) {
    console.error('Error al verificar reseña:', error);
    throw error;
  }
};
