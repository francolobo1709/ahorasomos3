// Utilidades para el proyecto

/**
 * Calcula la distancia entre dos puntos geográficos usando la fórmula de Haversine
 * @param {number} lat1 - Latitud del punto 1
 * @param {number} lon1 - Longitud del punto 1
 * @param {number} lat2 - Latitud del punto 2
 * @param {number} lon2 - Longitud del punto 2
 * @returns {number} Distancia en kilómetros
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radio de la Tierra en km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return Math.round(distance * 10) / 10; // Redondear a 1 decimal
};

const toRad = (value) => {
  return (value * Math.PI) / 180;
};

/**
 * Formatea la distancia para mostrar
 * @param {number} distance - Distancia en km
 * @returns {string} Distancia formateada
 */
export const formatDistance = (distance) => {
  if (distance < 1) {
    return `${Math.round(distance * 1000)} m`;
  }
  return `${distance} km`;
};

/**
 * Genera un mensaje de WhatsApp para contactar a un trabajador
 * @param {string} workerName - Nombre del trabajador
 * @param {string} turn - Turno seleccionado
 * @param {string} day - Día seleccionado (opcional)
 * @returns {string} Mensaje codificado para URL
 */
export const generateWhatsAppMessage = (workerName, turn, day = null) => {
  const turnLabels = {
    morning: 'la mañana (8-12hs)',
    midday: 'la siesta (12-16hs)',
    afternoon: 'la tarde (16-20hs)'
  };
  
  let message = `Hola ${workerName}, vi tu perfil en "Ahora Somos 3". `;
  message += `Me gustaría solicitar una cotización para el turno de ${turnLabels[turn]}`;
  
  if (day) {
    message += ` del día ${day}`;
  }
  
  message += '. ¿Podrías ayudarme?';
  
  return encodeURIComponent(message);
};

/**
 * Abre WhatsApp con un mensaje predefinido
 * @param {string} phone - Número de teléfono (formato internacional)
 * @param {string} message - Mensaje a enviar
 */
export const openWhatsApp = (phone, message) => {
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

/**
 * Obtiene la geolocalización del usuario
 * @returns {Promise<{latitude: number, longitude: number}>}
 */
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalización no soportada'));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

/**
 * Ordena trabajadores por proximidad
 * @param {Array} workers - Lista de trabajadores
 * @param {Object} userLocation - Ubicación del usuario {latitude, longitude}
 * @returns {Array} Trabajadores ordenados con campo 'distance'
 */
export const sortByProximity = (workers, userLocation) => {
  return workers
    .map(worker => ({
      ...worker,
      distance: calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        worker.location.latitude,
        worker.location.longitude
      )
    }))
    .sort((a, b) => a.distance - b.distance);
};

/**
 * Filtra trabajadores por disponibilidad en un turno específico
 * @param {Array} workers - Lista de trabajadores
 * @param {string} day - Día de la semana
 * @param {string} turn - Turno (morning, midday, afternoon)
 * @returns {Array} Trabajadores disponibles
 */
export const filterByAvailability = (workers, day, turn) => {
  return workers.filter(worker => 
    worker.availability[day]?.includes(turn)
  );
};
