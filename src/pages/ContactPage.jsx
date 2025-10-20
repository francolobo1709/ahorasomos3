import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Ponte en Contacto</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulario de Contacto */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envíanos un Mensaje</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" name="name" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea name="message" id="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
              Enviar Mensaje
            </button>
          </form>
        </div>
        
        {/* Información de Contacto */}
        <div className="space-y-6 text-gray-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Información de Contacto</h2>
          <p>
            <strong>Dirección:</strong><br/>
            Av. Siempre Viva 742, Springfield
          </p>
          <p>
            <strong>Teléfono:</strong><br/>
            <a href="tel:+5491112345678" className="text-green-600 hover:underline">+54 9 11 1234-5678</a>
          </p>
          <p>
            <strong>Email:</strong><br/>
            <a href="mailto:contacto@cleansweep.com" className="text-green-600 hover:underline">contacto@cleansweep.com</a>
          </p>
           <p>
            <strong>Horarios:</strong><br/>
            Lunes a Viernes: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
