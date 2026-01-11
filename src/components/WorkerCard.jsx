import React from 'react';
import { useNavigate } from 'react-router-dom';
import AvailabilityGrid from './AvailabilityGrid';
import StarRating from './StarRating';
import { formatDistance, generateWhatsAppMessage, openWhatsApp } from '../lib/utils';
import { DAYS } from '../data/constants';

/**
 * Tarjeta de trabajador para mostrar en los resultados de búsqueda
 * @param {Object} props
 * @param {Object} props.worker - Datos del trabajador
 * @param {string} props.selectedDay - Día seleccionado para mostrar disponibilidad
 */
const WorkerCard = ({ worker, selectedDay = 'lunes' }) => {
  const navigate = useNavigate();

  const handleContact = (e, turnId) => {
    e.stopPropagation(); // Evitar que se active el click de la tarjeta
    const message = generateWhatsAppMessage(
      worker.displayName,
      turnId,
      DAYS.find(d => d.id === selectedDay)?.label
    );
    openWhatsApp(worker.whatsapp, message);
  };

  const handleViewProfile = () => {
    navigate(`/worker/${worker.id}`);
  };

  // Calcular total de turnos disponibles en la semana
  const totalAvailableTurns = Object.values(worker.availability).reduce(
    (acc, turns) => acc + turns.length,
    0
  );

  return (
    <div
      onClick={handleViewProfile}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Header con info básica */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">{worker.displayName}</h3>
            <p className="text-sm text-gray-600 mt-1">
              📍 {worker.location.address}
            </p>
            {worker.distance && (
              <p className="text-sm text-blue-600 font-semibold mt-1">
                🚶 {formatDistance(worker.distance)}
              </p>
            )}
          </div>
          
          {/* Rating */}
          <div className="text-right">
            <StarRating rating={worker.rating} readonly={true} size="sm" />
            <p className="text-xs text-gray-500 mt-1">{worker.reviewsCount} opiniones</p>
          </div>
        </div>

        {/* Servicios */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {worker.services.map(service => (
            <span
              key={service}
              className="px-3 py-1 bg-white text-xs font-semibold text-gray-700 rounded-full shadow-sm"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Disponibilidad del día seleccionado */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-semibold text-gray-700">
            Disponibilidad - {DAYS.find(d => d.id === selectedDay)?.label}
          </h4>
          <span className="text-xs text-gray-500">
            {totalAvailableTurns} turnos esta semana
          </span>
        </div>
        
        <AvailabilityGrid availability={worker.availability[selectedDay] || []} />

        {/* Botones de acción */}
        <div className="mt-4 space-y-2">
          {worker.availability[selectedDay]?.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleViewProfile}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Ver Perfil
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const firstAvailableTurn = worker.availability[selectedDay][0];
                  handleContact(e, firstAvailableTurn);
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>💬</span>
                WhatsApp
              </button>
            </div>
          ) : (
            <p className="text-center text-sm text-gray-500 py-2">
              No disponible este día
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
