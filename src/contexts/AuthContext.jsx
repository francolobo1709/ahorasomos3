import { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '../lib/axios';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Al no haber backend de login aún, simulamos que no hay usuario al cargar
    setCurrentUser(null);
    setUserProfile(null);
    setLoading(false);
  }, []);

  const signup = async (email, password, userData) => {
    // TODO: Implementar con Axios cuando el backend tenga rutas de registro
    console.log("Signup simulado", email, userData);
    const user = { uid: '123', email };
    setCurrentUser(user);
    setUserProfile({ email, role: userData.role, name: userData.name });
    return user;
  };

  const login = async (email, password) => {
    // TODO: Implementar con Axios cuando el backend tenga rutas de login
    console.log("Login simulado", email);
    const user = { uid: '123', email };
    setCurrentUser(user);
    setUserProfile({ email, role: 'cliente', name: 'Usuario Prueba' });
    return user;
  };

  const logout = async () => {
    setCurrentUser(null);
    setUserProfile(null);
  };

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
