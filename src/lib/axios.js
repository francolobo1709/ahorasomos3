import axios from 'axios';

// Creamos la instancia configurada apuntando a tu backend de Node.js
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
});

// Interceptor: Automáticamente adjunta el token si el usuario está logueado
apiClient.interceptors.request.use((config) => {
  // Aquí podemos obtener el token de localStorage
  // const token = localStorage.getItem('token'); 
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

export default apiClient;
