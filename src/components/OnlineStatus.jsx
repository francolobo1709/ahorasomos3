import React, { useState, useEffect } from 'react';

/**
 * Indicador de estado de conexión
 * Muestra un banner cuando la app está offline
 */
const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowBanner(true);
      // Ocultar el banner después de 3 segundos
      setTimeout(() => setShowBanner(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowBanner(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showBanner) return null;

  return (
    <div
      className={`
        fixed top-16 left-4 right-4 z-50
        ${isOnline ? 'bg-green-500' : 'bg-red-500'}
        text-white px-4 py-3 rounded-lg shadow-lg
        flex items-center gap-3
        animate-slide-down
      `}
    >
      <span className="text-2xl">
        {isOnline ? '✅' : '⚠️'}
      </span>
      <div className="flex-1">
        <p className="font-semibold">
          {isOnline ? 'Conectado' : 'Sin conexión'}
        </p>
        <p className="text-sm opacity-90">
          {isOnline 
            ? 'La conexión ha sido restaurada' 
            : 'Trabajando en modo offline'
          }
        </p>
      </div>
      <button
        onClick={() => setShowBanner(false)}
        className="text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export default OnlineStatus;
