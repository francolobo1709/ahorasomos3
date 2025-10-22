import React from 'react';

// --- Datos de Ejemplo (Mock Data) ---
const cleaningServices = [
  { id: 1, title: 'Limpieza Básica', description: 'Ideal para mantenimiento semanal. Incluye polvo, aspirado, baños y cocina.', price: 50, image: 'https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, title: 'Limpieza Profunda', description: 'Una limpieza exhaustiva. Perfecto para mudanzas o limpiezas trimestrales.', price: 150, image: 'https://images.pexels.com/photos/7131427/pexels-photo-7131427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, title: 'Limpieza de Oficinas', description: 'Mantén tu espacio de trabajo impecable y productivo.', price: 120, image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, title: 'Limpieza Post-Obra', description: 'Eliminamos todo el polvo y escombros después de una remodelación.', price: 250, image: 'https://images.pexels.com/photos/5691533/pexels-photo-5691533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

// --- Componente Reutilizable: ServiceCard ---
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img className="h-56 w-full object-cover" src={service.image} alt={service.title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4 h-20">{service.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-green-600">${service.price}</p>
          <button className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};


const HomePage = () => {
  return (
    <>
      {/* Sección Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Tu espacio, <span className="text-green-600">impecable</span>.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Selecciona el servicio de limpieza que mejor se adapte a tus necesidades y déjanos el resto a nosotros.
        </p>
      </div>
      
      {/* Grid de Servicios */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cleaningServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
