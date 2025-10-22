import React from 'react';
import ServiceCard from '../components/ServiceCard.jsx';

const HomePage = ({ onReservation }) => {
  const services = [
    {
      id: 1,
      title: 'Limpieza Básica',
      description: 'Ideal para mantenimiento semanal. Incluye polvo, aspirado, baños y cocina.',
      price: 50,
      image: 'https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Limpieza Profunda',
      description: 'Una limpieza exhaustiva. Perfecto para mudanzas o limpiezas trimestrales.',
      price: 150,
      image: 'https://images.pexels.com/photos/7131427/pexels-photo-7131427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Limpieza de Oficinas',
      description: 'Mantén tu espacio de trabajo impecable y productivo.',
      price: 120,
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Limpieza Post-Obra',
      description: 'Eliminamos todo el polvo y escombros después de una remodelación.',
      price: 250,
      image: 'https://images.pexels.com/photos/5691533/pexels-photo-5691533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div style={{ padding: '2rem 0' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Tu espacio, <span style={{ color: '#059669' }}>impecable</span>.
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Selecciona el servicio de limpieza que mejor se adapte a tus necesidades y déjanos el resto a nosotros.
        </p>
      </section>
      
      {/* Services Grid */}
      <section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          justifyItems: 'center'
        }}>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} onReservation={onReservation} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;