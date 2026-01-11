import React from 'react';

const ServiceCard = ({ service, onReservation }) => {
  return (
    <div className="service-card">
      <div 
        className="service-card-image"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="service-card-price">
          ${service.price}
        </div>
      </div>

      <div className="service-card-content">
        <h3 className="service-card-title">
          {service.title}
        </h3>

        <p className="service-card-description">
          {service.description}
        </p>

        <button
          className="service-card-button"
          onClick={() => onReservation?.(service)}
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;