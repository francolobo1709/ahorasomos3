# 🏠 Ahora Somos 3 - Marketplace de Servicios Domésticos

Una aplicación web moderna que conecta **dueños de vivienda** con **empleados domésticos** de manera rápida y directa. Inspirado en el modelo de Uber, pero para servicios del hogar.

## 🚀 Características Principales

- ✅ **Búsqueda por Proximidad**: Encuentra trabajadores cerca de tu ubicación usando geolocalización
- ✅ **Sistema de Turnos**: Bloques de 4 horas (Mañana, Siesta, Tarde)
- ✅ **Disponibilidad Semanal**: Los trabajadores marcan su disponibilidad por día y turno
- ✅ **Comunicación Directa**: Contacto instantáneo vía WhatsApp
- ✅ **Filtros Inteligentes**: Por día, turno y proximidad
- ✅ **Perfiles Detallados**: Rating, servicios ofrecidos y disponibilidad completa

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Routing**: React Router DOM
- **Backend**: Firebase (Firestore + Authentication)
- **Geolocalización**: Browser Geolocation API

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/francolobo1709/ahorasomos3.git
cd ahorasomos3/AHORASOMOS3
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Authentication y Firestore Database
   - Copia las credenciales de configuración
   - Edita el archivo `.env.local` con tus credenciales:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
AHORASOMOS3/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── AvailabilityGrid.jsx    # Grid de turnos
│   │   ├── WeeklyAvailability.jsx  # Vista semanal
│   │   ├── WorkerCard.jsx          # Tarjeta de trabajador
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/               # Páginas principales
│   │   ├── HomePage.jsx             # Búsqueda de trabajadores
│   │   ├── WorkerProfilePage.jsx    # Perfil detallado
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── lib/                 # Utilidades y configuración
│   │   ├── firebase.js              # Config de Firebase
│   │   └── utils.js                 # Funciones auxiliares
│   ├── data/                # Datos de ejemplo
│   │   └── constants.js             # Mock data y constantes
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
└── package.json
```

## 🎯 Funcionalidades Detalladas

### Sistema de Turnos
Cada trabajador puede marcar su disponibilidad en bloques de 4 horas:
- **Mañana**: 08:00 - 12:00
- **Siesta**: 12:00 - 16:00
- **Tarde**: 16:00 - 20:00

### Búsqueda Inteligente
1. La app obtiene tu ubicación automáticamente
2. Calcula la distancia a cada trabajador usando Haversine
3. Ordena los resultados por proximidad
4. Filtra por día y turno seleccionado

### Flujo de Contacto
1. Usuario selecciona día y turno
2. Visualiza trabajadores disponibles
3. Hace clic en "Contactar por WhatsApp"
4. Se abre WhatsApp con mensaje predefinido:
   > "Hola [Nombre], vi tu perfil en 'Ahora Somos 3'. Me gustaría solicitar una cotización para el turno de [Turno] del día [Día]. ¿Podrías ayudarme?"

## 🔥 Próximos Pasos (Roadmap)

### Fase 1: Datos Reales (En desarrollo)
- [ ] Implementar autenticación con Firebase Auth
- [ ] Crear colección `users` en Firestore
- [ ] Panel de registro para trabajadores
- [ ] Persistencia de disponibilidad en tiempo real

### Fase 2: Funcionalidades Avanzadas
- [ ] Sistema de ratings y reseñas
- [ ] Historial de trabajos
- [ ] Notificaciones push
- [ ] Filtros avanzados (precio, servicios específicos)
- [ ] Modo oscuro

### Fase 3: Monetización
- [ ] Comisiones por transacción
- [ ] Perfiles premium para trabajadores
- [ ] Publicidad integrada

## 🗃️ Estructura de Datos (Firestore)

### Colección: `users`
```javascript
{
  uid: "string",
  displayName: "string",
  role: "owner" | "worker",
  email: "string",
  phone: "string",
  
  // Solo para workers:
  whatsapp: "string",
  location: {
    latitude: number,
    longitude: number,
    address: "string"
  },
  availability: {
    lunes: ["morning", "afternoon"],
    martes: ["midday"],
    // ...
  },
  services: ["limpieza", "cocina", "planchado"],
  rating: number,
  reviewsCount: number
}
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

- **Email**: hugolobo8790@gmail.com
- **WhatsApp**: +54 9 385-409589
- **GitHub**: [@francolobo1709](https://github.com/francolobo1709)

---

**Hecho con ❤️ en Santiago del Estero, Argentina**
