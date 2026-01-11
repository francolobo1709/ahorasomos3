import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Grid adaptativo - 1 col en móvil, 4 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Columna 1: Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-3 md:mb-4">
              🏠 AhoraSomos3
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Conectamos profesionales del hogar con clientes que necesitan sus servicios.
            </p>
          </div>
          
          {/* Columna 2: Navegación */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  🏠 Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  ℹ️ Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  📧 Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Para Usuarios */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Para Usuarios</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  🔐 Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  ✨ Registrarse
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 4: Contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                📧 hugolobo8790@gmail.com
              </li>
              <li className="text-gray-400">
                📱 +54 9 385-409589
              </li>
              <li className="text-gray-400">
                📍 Santiago del Estero, Argentina
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            © 2026 AhoraSomos3. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
