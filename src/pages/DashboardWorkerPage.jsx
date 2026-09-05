import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import WeeklyAvailability from '../components/WeeklyAvailability';

export default function DashboardWorkerPage() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('availability');

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                👋 Hola, {userProfile?.name || currentUser?.displayName}
              </h1>
              <p className="text-gray-600 text-sm">Panel de Trabajador</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('availability')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${
                  activeTab === 'availability'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📅 Disponibilidad
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${
                  activeTab === 'bookings'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📋 Mis Reservas
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${
                  activeTab === 'profile'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                👤 Mi Perfil
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'availability' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Gestiona tu Disponibilidad
                </h2>
                <p className="text-gray-600 mb-6">
                  Selecciona los horarios en los que estás disponible para trabajar.
                </p>
                <WeeklyAvailability 
                  availability={{}}
                  onSave={(newAvailability) => {
                    console.log('Guardando disponibilidad:', newAvailability);
                  }}
                />
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Mis Reservas</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <p className="text-blue-800">
                    📋 Aquí verás tus próximas reservas confirmadas
                  </p>
                  <p className="text-blue-600 text-sm mt-2">
                    Próximamente: Sistema de gestión de reservas
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Mi Perfil</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <p className="text-gray-900">{userProfile?.name}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <p className="text-gray-900">{userProfile?.email}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <p className="text-gray-900">{userProfile?.phone}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de cuenta
                    </label>
                    <p className="text-gray-900">👷 Trabajador</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
