import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';

// Importamos nuestros componentes
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import OnlineStatus from './components/OnlineStatus.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ReservationPage from './pages/ReservationPage.jsx';
import WorkerProfilePage from './pages/WorkerProfilePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardWorkerPage from './pages/DashboardWorkerPage.jsx';
import DashboardClientPage from './pages/DashboardClientPage.jsx';

// Componente para rutas protegidas
function ProtectedRoute({ children, requiredRole }) {
  const { currentUser, userProfile } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && userProfile?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

function AppContent() {
  const { currentUser, userProfile } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Indicador de estado online/offline */}
      <OnlineStatus />
      
      {/* Navbar con navegación por rutas */}
      <Navbar />

      {/* Contenido principal con rutas */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/worker/:workerId" element={<WorkerProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Rutas protegidas para trabajadores */}
          <Route 
            path="/dashboard/worker" 
            element={
              <ProtectedRoute requiredRole="worker">
                <DashboardWorkerPage />
              </ProtectedRoute>
            } 
          />
          
          {/* Rutas protegidas para clientes */}
          <Route 
            path="/dashboard/client" 
            element={
              <ProtectedRoute requiredRole="client">
                <DashboardClientPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;

