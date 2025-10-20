import React, { useState } from 'react';

// Importamos nuestros componentes desde sus nuevas carpetas.
import Header from './components/header.jsx'
import Footer from './components/footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  // Este estado ('currentPage') ahora controlará qué página se muestra.
  const [currentPage, setCurrentPage] = useState('home');

  // Esta función se la pasaremos al Header para que pueda cambiar el estado.
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Sube al inicio de la página cada vez que navegamos.
  };

  // Función para renderizar la página actual basada en el estado.
  const renderCurrentPage = () => {
    if (currentPage === 'about') {
      return <AboutPage />;
    }
    if (currentPage === 'contact') {
      return <ContactPage />;
    }
    // Por defecto, siempre mostramos la página de inicio.
    return <HomePage />;
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans flex flex-col">
      
      {/* El Header recibe la función 'handleNavigate' como una "prop" */}
      <Header onNavigate={handleNavigate} />

      {/* El main ahora tiene un 'flex-grow' para ocupar el espacio disponible */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        {/* Llamamos a la función que decide qué página mostrar */}
        {renderCurrentPage()}
      </main>

      {/* Nuestro nuevo componente Footer */}
      <Footer />
      
    </div>
  );
}

export default App;

