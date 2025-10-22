import React from 'react';

// --- Icono SVG como Componente ---
const SparkleIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.93 2.13a2 2 0 0 1 4.14 0l.83 3.3a1 1 0 0 0 .94.67h3.46a2 2 0 0 1 1.42 3.42l-2.83 2.05a1 1 0 0 0-.36 1.11l.83 3.3a2 2 0 0 1-3.42 2.24l-2.83-2.05a1 1 0 0 0-1.18 0l-2.83 2.05a2 2 0 0 1-3.42-2.24l.83-3.3a1 1 0 0 0-.36-1.11L.53 9.1a2 2 0 0 1 1.42-3.42h3.46a1 1 0 0 0 .94-.67l.83-3.3z"/>
  </svg>
);

// El componente Header ahora recibe 'onNavigate' como una "propiedad" (prop).
// Esto le permite comunicarse con el componente padre (App.jsx) para cambiar de página.
const Header = ({ onNavigate }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo y Nombre - Al hacer clic, navega a 'home' */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            {/* Aquí podrías reemplazar SparkleIcon con <img src="/logo.png" alt="Logo"/> */}
            <SparkleIcon className="h-8 w-8 text-green-600" />
            <span className="ml-3 text-2xl font-bold text-gray-800">CleanSweep</span>
          </div>

          {/* Menú de Navegación - Cada enlace llama a onNavigate con la página correspondiente */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" onClick={() => onNavigate('home')} className="text-gray-600 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
              <a href="#" onClick={() => onNavigate('about')} className="text-gray-600 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Nosotros</a>
              <a href="#" onClick={() => onNavigate('contact')} className="text-gray-600 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;

