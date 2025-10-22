import React from 'react';

const ServiceCard = ({ service, onReservation }) => {
  return (
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '450px',
        width: '350px',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      {/* Imagen de fondo */}
      <div 
        style={{
          height: '200px',
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          backgroundColor: '#059669',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          ${service.price}
        </div>
      </div>

      {/* Contenido de la card */}
      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Título */}
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '0.75rem'
        }}>
          {service.title}
        </h3>

        {/* Descripción */}
        <p style={{
          color: '#6b7280',
          marginBottom: '1.5rem',
          lineHeight: '1.5',
          flexGrow: 1,
          fontSize: '0.9rem'
        }}>
          {service.description}
        </p>

        {/* Botón de Reservar */}
        <button
          style={{
            width: '100%',
            backgroundColor: '#059669',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#047857';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#059669';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onClick={() => {
            onReservation && onReservation(service.title);
          }}
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;