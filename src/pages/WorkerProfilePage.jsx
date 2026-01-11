import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockWorkers, DAYS } from '../data/constants';
import WeeklyAvailability from '../components/WeeklyAvailability';
import { formatDistance, generateWhatsAppMessage, openWhatsApp } from '../lib/utils';

const WorkerProfilePage = () => {
  const { workerId } = useParams();
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState('lunes');
  const [selectedTurn, setSelectedTurn] = useState(null);

  // Buscar el trabajador por ID
  const worker = mockWorkers.find(w => w.id === workerId);

  if (!worker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Trabajador no encontrado
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleContact = () => {
    if (!selectedTurn) {
      alert('Por favor selecciona un turno primero');
      return;
    }

    const message = generateWhatsAppMessage(
      worker.displayName,
      selectedTurn,
      DAYS.find(d => d.id === selectedDay)?.label
    );
    openWhatsApp(worker.whatsapp, message);
  };

  const handleSelectTurn = (turnId) => {
    const dayAvailability = worker.availability[selectedDay] || [];
    if (dayAvailability.includes(turnId)) {
      setSelectedTurn(turnId);
    }
  };

  const isAvailableNow = worker.availability[selectedDay]?.includes(selectedTurn);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header del perfil */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/')}
            className="mb-4 text-white hover:text-blue-200 flex items-center gap-2"
          >
            ← Volver a la búsqueda
          </button>

          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl">
              👤
            </div>

            {/* Info básica */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{worker.displayName}</h1>
              <div className="space-y-2">
                <p className="text-blue-100 flex items-center gap-2">
                  <span>📍</span>
                  {worker.location.address}
                </p>
                {worker.distance && (
                  <p className="text-blue-100 flex items-center gap-2">
                    <span>🚶</span>
                    A {formatDistance(worker.distance)} de distancia
                  </p>
                )}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-300 text-xl">⭐</span>
                    <span className="text-2xl font-bold">{worker.rating}</span>
                  </div>
                  <span className="text-blue-100">
                    ({worker.reviewsCount} opiniones)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-blue-100 mb-2">Servicios:</h3>
            <div className="flex gap-2 flex-wrap">
              {worker.services.map(service => (
                <span
                  key={service}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Disponibilidad semanal */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📅 Disponibilidad Semanal
          </h2>
          <WeeklyAvailability
            availability={worker.availability}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />

          {/* Selector interactivo de turnos */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Selecciona un turno para contactar:
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {['morning', 'midday', 'afternoon'].map(turnId => {
                const isAvailable = worker.availability[selectedDay]?.includes(turnId);
                const isSelected = selectedTurn === turnId;
                const turnLabels = {
                  morning: 'Mañana',
                  midday: 'Siesta',
                  afternoon: 'Tarde'
                };

                return (
                  <button
                    key={turnId}
                    onClick={() => isAvailable && handleSelectTurn(turnId)}
                    disabled={!isAvailable}
                    className={`
                      p-3 rounded-lg font-semibold text-sm transition-all
                      ${isSelected
                        ? 'bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2'
                        : isAvailable
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    {turnLabels[turnId]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Botón de contacto flotante */}
        <div className="sticky bottom-4 bg-white rounded-xl shadow-xl p-4 border-2 border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                {selectedTurn ? 'Listo para contactar' : 'Selecciona un turno primero'}
              </p>
              {selectedTurn && (
                <p className="text-xs text-gray-500 mt-1">
                  {DAYS.find(d => d.id === selectedDay)?.label} - Turno seleccionado
                </p>
              )}
            </div>
            <button
              onClick={handleContact}
              disabled={!selectedTurn || !isAvailableNow}
              className={`
                px-6 py-3 rounded-lg font-bold text-lg flex items-center gap-2
                transition-all duration-200
                ${selectedTurn && isAvailableNow
                  ? 'bg-green-500 text-white hover:bg-green-600 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              <span>💬</span>
              Contactar por WhatsApp
            </button>
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-blue-50 rounded-xl p-6 mt-6">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <span>ℹ️</span>
            ¿Cómo funciona?
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✅ Selecciona el día y turno que necesitas</li>
            <li>✅ Haz clic en "Contactar por WhatsApp"</li>
            <li>✅ Se abrirá WhatsApp con un mensaje predefinido</li>
            <li>✅ Negocia el precio y confirma el servicio directamente</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfilePage;
