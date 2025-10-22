import React, { useState } from 'react';

// Importamos nuestros componentes desde sus nuevas carpetas.
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ReservationPage from './pages/ReservationPage.jsx';

function App() {
  // Este estado ('currentPage') ahora controlará qué página se muestra.
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  // Esta función se la pasaremos al Header para que pueda cambiar el estado.
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Sube al inicio de la página cada vez que navegamos.
  };

  // Función para navegar a reservas con servicio seleccionado
  const handleReservation = (service) => {
    setSelectedService(service);
    setCurrentPage('reservation');
    window.scrollTo(0, 0);
  };

  // Función para renderizar la página actual basada en el estado.
  const renderCurrentPage = () => {
    if (currentPage === 'about') {
      return <AboutPage />;
    }
    if (currentPage === 'contact') {
      return <ContactPage />;
    }
    if (currentPage === 'reservation') {
      return <ReservationPage 
        selectedService={selectedService} 
        onBack={() => handleNavigate('home')} 
      />;
    }
    // Por defecto, siempre mostramos la página de inicio.
    return <HomePage onReservation={handleReservation} />;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'Arial, sans-serif' }}>
      
      {/* El Navbar recibe la función 'handleNavigate' como una "prop" */}
      <Navbar onNavigate={handleNavigate} />

      {/* Contenido principal */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        {/* Llamamos a la función que decide qué página mostrar */}
        {renderCurrentPage()}
      </main>

      {/* Nuestro nuevo componente Footer */}
      <Footer />
      
    </div>
  );
}

export default App;

