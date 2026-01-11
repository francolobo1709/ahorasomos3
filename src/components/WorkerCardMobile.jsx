import React from 'react';
import { Link } from 'react-router-dom';
import AvailabilityGrid from './AvailabilityGrid';
import StarRating from './StarRating';

export default function WorkerCard({ worker, distance }) {
  const handleWhatsApp = () => {
    const phone = worker.phone.replace(/\D/g, '');
    const message = `Hola ${worker.name}! Vi tu perfil en AhoraSomos3 y me interesa contratar tus servicios de ${worker.services.join(', ')}. ¿Podríamos coordinar?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header con foto y badges */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-4 md:p-6">
        <div className="flex items-start gap-3 md:gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <img 
              src={worker.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(worker.name)}&size=128&background=0ea5e9&color=fff&bold=true`} 
              alt={worker.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
            />
            {worker.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-lg">
                ✓
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">{worker.name}</h3>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <StarRating value={worker.rating || 5} size="sm" readonly />
              <span className="text-xs md:text-sm text-gray-600">({worker.reviewCount || 0})</span>
            </div>
            {distance && (
              <div className="inline-flex items-center gap-1 bg-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium text-primary-700 shadow-sm">
                📍 {distance.toFixed(1)} km
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 md:p-6">
        {/* Servicios */}
        <div className="mb-4">
          <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">Servicios</h4>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {worker.services?.map((service, index) => (
              <span 
                key={index}
                className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs md:text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div className="mb-4 flex items-center justify-between bg-gradient-to-r from-primary-50 to-secondary-50 p-3 rounded-xl">
          <span className="text-xs md:text-sm text-gray-600 font-medium">Precio/hora</span>
          <span className="text-xl md:text-2xl font-bold text-primary-600">${worker.hourlyRate}</span>
        </div>

        {/* Disponibilidad */}
        <div className="mb-4">
          <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-3">Disponibilidad</h4>
          <AvailabilityGrid availability={worker.availability} compact />
        </div>

        {/* Acciones - Stack en móvil, lado a lado en desktop */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
          <Link
            to={`/worker/${worker.id}`}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition font-medium text-center text-sm md:text-base"
          >
            Ver Perfil
          </Link>
          <button
            onClick={handleWhatsApp}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 transition font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Contactar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
