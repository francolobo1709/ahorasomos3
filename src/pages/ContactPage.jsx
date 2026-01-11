import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    tipoConsulta: 'general',
    fecha: '',
    hora: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    comentarios: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consulta enviada:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Ponte en Contacto
      </h1>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Información Personal */}
        <div className="contact-form-grid">
          <div className="contact-form-field">
            <label className="contact-form-label">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label">
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              required
              className="contact-form-input"
            />
          </div>
        </div>

        {/* Contacto */}
        <div className="contact-form-grid">
          <div className="contact-form-field">
            <label className="contact-form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
              className="contact-form-input"
            />
          </div>
        </div>

        {/* Tipo de Consulta */}
        <div className="contact-form-field">
          <label className="contact-form-label">
            Tipo de Consulta
          </label>
          <select
            name="tipoConsulta"
            value={formData.tipoConsulta}
            onChange={handleInputChange}
            className="contact-form-select"
          >
            <option value="general">Consulta General</option>
            <option value="cotizacion">Solicitar Cotización</option>
            <option value="reclamo">Reclamo</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        {/* Fecha y Hora Preferida */}
        <div className="contact-form-grid">
          <div className="contact-form-field">
            <label className="contact-form-label">
              Fecha Preferida de Contacto
            </label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label">
              Hora Preferida
            </label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleInputChange}
              className="contact-form-input"
            />
          </div>
        </div>

        {/* Dirección */}
        <div className="contact-form-field">
          <label className="contact-form-label">
            Dirección (Opcional)
          </label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            placeholder="Calle y número"
            className="contact-form-input"
          />
        </div>

        <div className="contact-form-grid">
          <div className="contact-form-field">
            <label className="contact-form-label">
              Ciudad
            </label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleInputChange}
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label">
              Código Postal
            </label>
            <input
              type="text"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleInputChange}
              className="contact-form-input"
            />
          </div>
        </div>

        {/* Comentarios */}
        <div className="contact-form-field">
          <label className="contact-form-label">
            Comentarios o Detalles
          </label>
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleInputChange}
            rows={4}
            placeholder="Cuéntanos más sobre tu consulta..."
            className="contact-form-textarea"
          />
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="contact-form-button"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
