import React from 'react';
import { TURNS, DAYS } from '../data/constants';

/**
 * Matriz visual de disponibilidad semanal con códigos de colores
 * @param {Object} props
 * @param {Object} props.availability - Objeto con disponibilidad {lunes: ['morning'], ...}
 * @param {boolean} props.editable - Si se puede editar
 * @param {Function} props.onToggle - Callback al hacer clic en una celda (day, turn)
 */
const AvailabilityMatrix = ({ availability = {}, editable = false, onToggle }) => {
  const handleCellClick = (day, turn) => {
    if (editable && onToggle) {
      onToggle(day, turn);
    }
  };

  const isTurnAvailable = (day, turn) => {
    return availability[day]?.includes(turn) || false;
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Día
              </th>
              {TURNS.map(turn => (
                <th 
                  key={turn.id}
                  className="p-2 text-center text-sm font-semibold text-gray-700 border-b-2 border-gray-200"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl">{turn.icon}</span>
                    <span>{turn.label}</span>
                    <span className="text-xs text-gray-500 font-normal">{turn.time}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DAYS.map(day => (
              <tr key={day.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-3 font-semibold text-gray-700">
                  {day.label}
                </td>
                {TURNS.map(turn => {
                  const isAvailable = isTurnAvailable(day.id, turn.id);
                  
                  return (
                    <td key={`${day.id}-${turn.id}`} className="p-2">
                      <button
                        type="button"
                        onClick={() => handleCellClick(day.id, turn.id)}
                        disabled={!editable}
                        className={`
                          w-full h-12 rounded-lg font-semibold text-sm
                          transition-all duration-200
                          ${isAvailable
                            ? 'bg-green-500 text-white shadow-md'
                            : 'bg-gray-200 text-gray-500'
                          }
                          ${editable
                            ? 'cursor-pointer hover:scale-105 hover:shadow-lg'
                            : 'cursor-default'
                          }
                        `}
                      >
                        {isAvailable ? '✓ Disponible' : '✗ No disponible'}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Leyenda */}
        <div className="mt-4 flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-600">Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <span className="text-gray-600">No disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityMatrix;
