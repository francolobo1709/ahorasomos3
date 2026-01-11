import React from 'react';
import { TURNS } from '../data/constants';

/**
 * Componente para mostrar y seleccionar la disponibilidad de turnos
 * @param {Object} props
 * @param {Array} props.availability - Array de turnos disponibles ['morning', 'midday', 'afternoon']
 * @param {Function} props.onSelectTurn - Callback cuando se selecciona un turno (opcional)
 * @param {boolean} props.interactive - Si permite seleccionar turnos
 */
const AvailabilityGrid = ({ availability = [], onSelectTurn, interactive = false }) => {
  const handleTurnClick = (turnId) => {
    if (interactive && onSelectTurn) {
      onSelectTurn(turnId);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {TURNS.map(turn => {
        const isAvailable = availability.includes(turn.id);
        const baseClasses = "p-3 rounded-lg text-center transition-all duration-200";
        const stateClasses = isAvailable
          ? "bg-green-500 text-white shadow-md"
          : "bg-gray-200 text-gray-500";
        const interactiveClasses = interactive
          ? "cursor-pointer hover:scale-105"
          : "";

        return (
          <button
            key={turn.id}
            type="button"
            className={`${baseClasses} ${stateClasses} ${interactiveClasses}`}
            onClick={() => handleTurnClick(turn.id)}
            disabled={!interactive}
          >
            <div className="text-2xl mb-1">{turn.icon}</div>
            <div className="text-xs font-semibold">{turn.label}</div>
            <div className="text-xs opacity-80">{turn.time}</div>
          </button>
        );
      })}
    </div>
  );
};

export default AvailabilityGrid;
