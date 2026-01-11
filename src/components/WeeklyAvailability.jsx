import React from 'react';
import { DAYS } from '../data/constants';
import AvailabilityGrid from './AvailabilityGrid';

/**
 * Componente para mostrar la disponibilidad semanal de un trabajador
 * @param {Object} props
 * @param {Object} props.availability - Objeto con disponibilidad por día {lunes: ['morning'], ...}
 * @param {string} props.selectedDay - Día seleccionado
 * @param {Function} props.onSelectDay - Callback cuando se selecciona un día
 */
const WeeklyAvailability = ({ availability = {}, selectedDay = 'lunes', onSelectDay }) => {
  return (
    <div className="space-y-4">
      {/* Selector de días */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {DAYS.map(day => {
          const isSelected = day.id === selectedDay;
          const hasAvailability = availability[day.id]?.length > 0;
          
          return (
            <button
              key={day.id}
              onClick={() => onSelectDay(day.id)}
              className={`
                px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap
                transition-all duration-200
                ${isSelected 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : hasAvailability
                  ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  : 'bg-gray-100 text-gray-400'
                }
              `}
            >
              {day.label}
            </button>
          );
        })}
      </div>

      {/* Grid de turnos para el día seleccionado */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Disponibilidad para {DAYS.find(d => d.id === selectedDay)?.label}:
        </h3>
        <AvailabilityGrid availability={availability[selectedDay] || []} />
      </div>
    </div>
  );
};

export default WeeklyAvailability;
