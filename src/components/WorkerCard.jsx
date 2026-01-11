import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import { formatDistance, openWhatsApp } from '../lib/utils';

/**
 * Tarjeta optimizada de trabajador con turnos de 4 horas
 * Sistema escalable para backend
 */
const WorkerCard = ({ worker }) => {
  const navigate = useNavigate();

  // Turnos de 4 horas configurables
  const turns = [
    { id: 'morning', label: 'Mañana (8-12)', hour: '8-12h' },
    { id: 'midday', label: 'Siesta (12-16)', hour: '12-16h' },
    { id: 'afternoon', label: 'Tarde (16-20)', hour: '16-20h' }
  ];

  const handleContact = () => {
    const message = `Hola ${worker.displayName}, vi tu perfil en AHORASOMOS3 y me gustaría solicitar una cotización.`;
    openWhatsApp(worker.whatsapp || worker.phone, message);
  };

  const handleViewProfile = () => {
    navigate(`/worker/${worker.id}`);
  };

  // Verificar disponibilidad de cada turno (preparado para backend)
  const checkTurnAvailability = (turnId) => {
    // Esta lógica se puede conectar con datos reales del backend
    if (worker.availability && typeof worker.availability === 'object') {
      // Buscar en todos los días de la semana
      return Object.values(worker.availability).some(dayTurns => 
        Array.isArray(dayTurns) && dayTurns.includes(turnId)
      );
    }
    return false;
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleViewProfile}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{worker.displayName || worker.name}</h3>
          {worker.distance && (
            <span className="text-sm text-green-600 font-medium">{formatDistance(worker.distance)}</span>
          )}
          {worker.location?.address && (
            <p className="text-xs text-gray-500 mt-1">📍 {worker.location.address}</p>
          )}
        </div>
        
        {/* Rating */}
        {worker.rating && (
          <div className="text-right">
            <StarRating rating={worker.rating} readonly={true} size="sm" />
            {worker.reviewsCount > 0 && (
              <p className="text-xs text-gray-500 mt-1">{worker.reviewsCount} opiniones</p>
            )}
          </div>
        )}
      </div>

      {/* Servicios */}
      {worker.services && worker.services.length > 0 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {worker.services.slice(0, 3).map(service => (
            <span
              key={service}
              className="px-2 py-1 bg-blue-50 text-xs font-medium text-blue-700 rounded-lg"
            >
              {service}
            </span>
          ))}
        </div>
      )}
      
      {/* Grid de turnos disponibles (4 horas) */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {turns.map(turn => {
          const isAvailable = checkTurnAvailability(turn.id);
          return (
            <div 
              key={turn.id} 
              className={`text-[10px] p-2 rounded-lg text-center border transition-colors ${
                isAvailable
                  ? 'bg-green-50 border-green-200 text-green-700' 
                  : 'bg-gray-50 border-gray-100 text-gray-400'
              }`}
            >
              <div className="font-semibold">{turn.hour}</div>
              <div className="text-[9px] mt-0.5">{isAvailable ? 'Disponible' : 'Ocupado'}</div>
            </div>
          );
        })}
      </div>

      {/* Botón de contacto */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handleContact();
        }}
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
      >
        <span>💬</span>
        Solicitar Cotización
      </button>
    </div>
  );
};

export default WorkerCard;
