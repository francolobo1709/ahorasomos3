import React, { useState } from 'react';

const ReservationPage = ({ selectedService, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || 'Limpieza Básica',
    date: '',
    time: '',
    address: '',
    message: ''
  });

  const services = [
    'Limpieza Básica',
    'Limpieza Profunda', 
    'Limpieza de Oficinas',
    'Limpieza Post-Obra'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva enviada para: ${formData.service}\nNombre: ${formData.name}\nFecha: ${formData.date}\nHora: ${formData.time}`);
  };

  return (
    <div className="reservation-container">
      {/* Header */}
      <div className="reservation-header">
        <button 
          onClick={onBack}
          className="reservation-back-button"
        >
          ← Volver
        </button>
        <h1 className="reservation-title">
          Reservar Servicio
        </h1>
        <p className="reservation-subtitle">
          Complete el formulario para solicitar su servicio de limpieza
        </p>
      </div>
      
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="reservation-form">
        {/* Información Personal */}
        <div className="reservation-form-grid">
          <div className="reservation-form-field">
            <label className="reservation-form-label">
              Nombre *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="reservation-form-input"
            />
          </div>
          <div className="reservation-form-field">
            <label className="reservation-form-label">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="reservation-form-input"
            />
          </div>
        </div>

        {/* Teléfono */}
        <div className="reservation-form-field">
          <label className="reservation-form-label">
            Teléfono *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="reservation-form-input"
          />
        </div>

        {/* Tipo de Servicio */}
        <div className="reservation-form-field">
          <label className="reservation-form-label">
            Tipo de Servicio *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="reservation-form-select"
          >
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Fecha y Hora */}
        <div className="reservation-form-grid">
          <div className="reservation-form-field">
            <label className="reservation-form-label">
              Fecha *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="reservation-form-input"
            />
          </div>
          <div className="reservation-form-field">
            <label className="reservation-form-label">
              Hora *
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="reservation-form-input"
            />
          </div>
        </div>

        {/* Dirección */}
        <div className="reservation-form-field">
          <label className="reservation-form-label">
            Dirección *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder="Calle, número, ciudad"
            className="reservation-form-input"
          />
        </div>

        {/* Mensaje */}
        <div className="reservation-form-field">
          <label className="reservation-form-label">
            Comentarios adicionales
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            placeholder="Detalles especiales, instrucciones de acceso, etc."
            className="reservation-form-textarea"
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="reservation-form-button"
        >
          Enviar Reserva
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;