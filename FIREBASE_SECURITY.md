# Reglas de Seguridad de Firebase

## Configuración para Firestore

Copia y pega estas reglas en Firebase Console > Firestore Database > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isSignedIn() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isSignedIn() && request.auth.uid == userId;
    }
    
    // Colección de usuarios
    match /users/{userId} {
      // Todos pueden leer perfiles (para búsqueda de trabajadores)
      allow read: if isSignedIn();
      
      // Solo el dueño puede crear su perfil
      allow create: if isOwner(userId);
      
      // Solo el dueño puede actualizar su perfil
      allow update: if isOwner(userId) 
        && request.resource.data.uid == userId  // No puede cambiar su UID
        && request.resource.data.role == resource.data.role; // No puede cambiar su rol
      
      // No permitir delete (opcional: permitir solo a admins)
      allow delete: if false;
    }
    
    // Colección de reseñas
    match /reviews/{reviewId} {
      // Todos pueden leer reseñas
      allow read: if isSignedIn();
      
      // Solo usuarios autenticados pueden crear reseñas
      allow create: if isSignedIn()
        && request.resource.data.userId == request.auth.uid  // El userId debe ser el del autor
        && request.resource.data.rating >= 1 
        && request.resource.data.rating <= 5  // Rating entre 1-5
        && request.resource.data.comment.size() <= 500;  // Máximo 500 caracteres
      
      // Solo el autor puede actualizar su reseña
      allow update: if isOwner(resource.data.userId)
        && request.resource.data.userId == resource.data.userId  // No puede cambiar el autor
        && request.resource.data.workerId == resource.data.workerId;  // No puede cambiar el trabajador
      
      // Solo el autor puede borrar su reseña
      allow delete: if isOwner(resource.data.userId);
    }
    
    // Colección de favoritos (opcional)
    match /favorites/{userId} {
      allow read, write: if isOwner(userId);
    }
  }
}
```

## Configuración para Firebase Storage (opcional)

Para subir fotos de perfil:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Fotos de perfil
    match /profiles/{userId}/{fileName} {
      // Solo el dueño puede subir/actualizar su foto
      allow write: if request.auth != null 
        && request.auth.uid == userId
        && request.resource.size < 5 * 1024 * 1024  // Máximo 5MB
        && request.resource.contentType.matches('image/.*');  // Solo imágenes
      
      // Todos pueden leer fotos de perfil
      allow read: if true;
    }
  }
}
```

## Configuración de Authentication

1. Ve a Firebase Console > Authentication
2. Habilita los métodos de autenticación:
   - ✅ Email/Password
   - ✅ Google (opcional)
   - ✅ Phone (opcional para verificación)

3. Configura el dominio autorizado:
   - Agrega tu dominio de producción
   - localhost ya está autorizado por defecto

## Índices de Firestore (para queries optimizadas)

Firebase creará automáticamente estos índices cuando los necesites, pero puedes crearlos manualmente:

```
Colección: users
Campos: role (Ascending), rating (Descending)

Colección: reviews
Campos: workerId (Ascending), createdAt (Descending)
```

## Configuración de App Check (Recomendado para producción)

Para prevenir abuso de la API:

1. Ve a Firebase Console > App Check
2. Habilita reCAPTCHA v3 para web
3. Agrega este código en `src/lib/firebase.js`:

```javascript
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('YOUR_RECAPTCHA_SITE_KEY'),
  isTokenAutoRefreshEnabled: true
});
```

## Testing de Reglas

Puedes probar las reglas en Firebase Console:

1. Ve a Firestore > Rules
2. Haz clic en "Rules Playground"
3. Prueba diferentes operaciones

## Notas de Seguridad

⚠️ **IMPORTANTE**: 
- Nunca uses `allow read, write: if true;` en producción
- Siempre valida el contenido en las reglas
- Limita el tamaño de los documentos
- Usa App Check para prevenir abuso
- Monitorea el uso en Firebase Console > Usage

## Backup de Datos

Configura backups automáticos:

1. Ve a Firebase Console > Firestore
2. Habilita "Point-in-time recovery"
3. Configura exportaciones automáticas a Google Cloud Storage
