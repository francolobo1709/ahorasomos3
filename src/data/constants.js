// Turnos del día (bloques de 4 horas)
export const TURNS = [
  { 
    id: 'morning', 
    label: 'Mañana', 
    time: '08:00 - 12:00',
    icon: '🌅'
  },
  { 
    id: 'midday', 
    label: 'Siesta', 
    time: '12:00 - 16:00',
    icon: '☀️'
  },
  { 
    id: 'afternoon', 
    label: 'Tarde', 
    time: '16:00 - 20:00',
    icon: '🌆'
  }
];

// Días de la semana
export const DAYS = [
  { id: 'lunes', label: 'Lun' },
  { id: 'martes', label: 'Mar' },
  { id: 'miercoles', label: 'Mié' },
  { id: 'jueves', label: 'Jue' },
  { id: 'viernes', label: 'Vie' },
  { id: 'sabado', label: 'Sáb' },
  { id: 'domingo', label: 'Dom' }
];

// Datos de ejemplo para desarrollo (mock data)
// En producción, estos vendrán de Firebase
export const mockWorkers = [
  {
    id: '1',
    displayName: 'Ana García',
    role: 'worker',
    whatsapp: '5491100000001',
    location: {
      latitude: -34.6037,
      longitude: -58.3816,
      address: 'Palermo, CABA'
    },
    availability: {
      lunes: ['morning', 'afternoon'],
      martes: ['morning', 'midday'],
      miercoles: ['afternoon'],
      jueves: ['morning', 'afternoon'],
      viernes: ['morning'],
      sabado: [],
      domingo: []
    },
    services: ['limpieza', 'cocina'],
    rating: 4.8,
    reviewsCount: 23
  },
  {
    id: '2',
    displayName: 'María López',
    role: 'worker',
    whatsapp: '5491100000002',
    location: {
      latitude: -34.6158,
      longitude: -58.4333,
      address: 'Villa Crespo, CABA'
    },
    availability: {
      lunes: ['midday', 'afternoon'],
      martes: ['morning', 'afternoon'],
      miercoles: ['morning', 'midday', 'afternoon'],
      jueves: ['midday'],
      viernes: ['morning', 'afternoon'],
      sabado: ['morning'],
      domingo: []
    },
    services: ['limpieza', 'planchado'],
    rating: 4.9,
    reviewsCount: 45
  },
  {
    id: '3',
    displayName: 'Carmen Rodríguez',
    role: 'worker',
    whatsapp: '5491100000003',
    location: {
      latitude: -34.5965,
      longitude: -58.3897,
      address: 'Recoleta, CABA'
    },
    availability: {
      lunes: ['morning'],
      martes: ['morning', 'midday'],
      miercoles: ['morning', 'afternoon'],
      jueves: ['morning', 'midday', 'afternoon'],
      viernes: ['afternoon'],
      sabado: [],
      domingo: []
    },
    services: ['limpieza', 'cocina', 'cuidado'],
    rating: 5.0,
    reviewsCount: 67
  }
];
