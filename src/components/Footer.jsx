import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CleanSweep. Todos los derechos reservados.</p>
          <p className="mt-1">Diseñado con Frescura y Cuidado</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

