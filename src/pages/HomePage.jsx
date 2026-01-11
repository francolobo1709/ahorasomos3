import React, { useState, useEffect } from 'react';
import WorkerCard from '../components/WorkerCard';
import { mockWorkers, DAYS, TURNS } from '../data/constants';
import { sortByProximity, filterByAvailability } from '../lib/utils';
import { useLocation } from '../hooks/useLocation';

const HomePage = () => {
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const [selectedDay, setSelectedDay] = useState('lunes');
  const [selectedTurn, setSelectedTurn] = useState(null);
  
  // Usar el hook de geolocalización
  const { location, loading, error: locationError, requestLocation } = useLocation();

  useEffect(() => {
    if (location) {
      // Ordenar trabajadores por proximidad
      const sortedWorkers = sortByProximity(mockWorkers, location);
      setWorkers(sortedWorkers);
      setFilteredWorkers(sortedWorkers);
    } else if (!loading && locationError) {
      // Si hay error, mostrar trabajadores sin ordenar
      setWorkers(mockWorkers);
      setFilteredWorkers(mockWorkers);
    }
  }, [location, loading, locationError]);

  // Filtrar trabajadores cuando cambian los filtros
  useEffect(() => {
    let filtered = workers;

    // Filtrar por disponibilidad si hay un turno seleccionado
    if (selectedTurn) {
      filtered = filterByAvailability(filtered, selectedDay, selectedTurn);
    }

    setFilteredWorkers(filtered);
  }, [selectedDay, selectedTurn, workers]);

  const handleTurnFilter = (turnId) => {
    // Toggle: si el turno ya está seleccionado, lo deselecciona
    setSelectedTurn(selectedTurn === turnId ? null : turnId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Buscando trabajadores cerca de ti...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-safe">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Encuentra tu trabajador <span className="text-yellow-300">ideal</span>
          </h1>
          <p className="text-xl text-blue-100 mb-2">
            Conecta directamente con empleados domésticos cerca de ti
          </p>
          {locationError && (
            <div className="mt-3 p-3 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ {locationError.message}
              </p>
              <button
                onClick={requestLocation}
                className="mt-2 text-sm text-yellow-900 font-semibold underline hover:no-underline"
              >
                Intentar de nuevo
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* Selector de día */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Selecciona un día:</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {DAYS.map(day => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`
                    px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap
                    transition-all duration-200
                    ${selectedDay === day.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro por turno */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Filtrar por turno (opcional):
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {TURNS.map(turn => (
                <button
                  key={turn.id}
                  onClick={() => handleTurnFilter(turn.id)}
                  className={`
                    px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap
                    transition-all duration-200 flex items-center gap-2
                    ${selectedTurn === turn.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <span>{turn.icon}</span>
                  <span>{turn.label}</span>
                  <span className="text-xs opacity-75">({turn.time})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lista de trabajadores */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredWorkers.length} trabajador{filteredWorkers.length !== 1 ? 'es' : ''} disponible{filteredWorkers.length !== 1 ? 's' : ''}
          </h2>
          {selectedTurn && (
            <button
              onClick={() => setSelectedTurn(null)}
              className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
            >
              Limpiar filtro
            </button>
          )}
        </div>

        {filteredWorkers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkers.map(worker => (
              <WorkerCard
                key={worker.id}
                worker={worker}
                selectedDay={selectedDay}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No hay trabajadores disponibles
            </h3>
            <p className="text-gray-500">
              Intenta cambiar el día o el turno seleccionado
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;