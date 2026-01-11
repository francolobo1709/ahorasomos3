import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-16 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Ponte en Contacto</h1>
          <p className="text-gray-500 text-lg">Estamos aquí para ayudarte a mantener tu hogar impecable.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all" 
                  placeholder="Ej. Juan Pérez" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all" 
                  placeholder="juan@ejemplo.com" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Mensaje</label>
                <textarea 
                  rows="4" 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all resize-none" 
                  placeholder="¿En qué podemos ayudarte?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Información Directa</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 text-2xl">📍</div>
                <div>
                  <p className="font-bold text-gray-800">Dirección</p>
                  <p className="text-gray-600">Av. Siempre Viva 742, Springfield</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 text-2xl">📞</div>
                <div>
                  <p className="font-bold text-gray-800">Teléfono</p>
                  <a href="tel:+5491112345678" className="text-green-600 hover:underline">+54 9 11 1234-5678</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 text-2xl">📧</div>
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <a href="mailto:contacto@ahorasomos3.com" className="text-green-600 hover:underline">contacto@ahorasomos3.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 text-2xl">⏰</div>
                <div>
                  <p className="font-bold text-gray-800">Horario de Atención</p>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 - 20:00</p>
                  <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
