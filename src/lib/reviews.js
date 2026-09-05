import apiClient from './axios';

/**
 * Agregar una nueva reseña
 * @param {Object} reviewData - Datos de la reseña
 * @returns {Promise<string>} ID de la reseña creada
 */
export const addReview = async (reviewData) => {
  try {
    const response = await apiClient.post('/reviews', reviewData);
    return response.data.id;
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
    // Al no haber endpoint en el backend, simulamos retorno vacío
    // const response = await apiClient.get(`/reviews/worker/${workerId}`);
    // return response.data;
    return [];
  } catch (error) {
    console.error('Error al obtener reseñas:', error);
    return [];
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
    // const response = await apiClient.get(`/reviews/check/${userId}/${workerId}`);
    // return response.data.hasReviewed;
    return false;
  } catch (error) {
    console.error('Error al verificar reseña:', error);
    return false;
  }
};
