import { useState, useEffect } from 'react';

/**
 * Hook personalizado para obtener la geolocalización del usuario
 * Maneja permisos, errores y estados de carga
 * 
 * @returns {Object} { location, loading, error, requestLocation }
 */
export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const requestLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      const err = {
        code: 0,
        message: 'Tu navegador no soporta geolocalización'
      };
      setError(err);
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
        setLoading(false);
      },
      // Error callback
      (err) => {
        let errorMessage = 'Error al obtener ubicación';
        
        switch (err.code) {
          case err.PERMISSION_DENIED:
            errorMessage = 'Permiso de ubicación denegado. Por favor, habilítalo en la configuración de tu navegador.';
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage = 'Información de ubicación no disponible.';
            break;
          case err.TIMEOUT:
            errorMessage = 'La solicitud de ubicación tardó demasiado.';
            break;
          default:
            errorMessage = 'Error desconocido al obtener ubicación.';
        }
        
        setError({
          code: err.code,
          message: errorMessage
        });
        setLoading(false);
      },
      // Options
      {
        enableHighAccuracy: true, // Usar GPS si está disponible
        timeout: 10000, // 10 segundos de timeout
        maximumAge: 300000 // Caché de 5 minutos
      }
    );
  };

  // Solicitar ubicación automáticamente al montar el componente
  useEffect(() => {
    requestLocation();
  }, []);

  return {
    location,
    loading,
    error,
    requestLocation // Permite reintentar manualmente
  };
};
