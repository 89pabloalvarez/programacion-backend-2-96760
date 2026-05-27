# programacion-backend-2-96760
Repositorio creado para presentar la entrega final de la comisión: #96760-programación-backend-2

## 📦 Dependencias en package.json

1_ Core:

-express → framework principal.
-dotenv → manejo de variables de entorno.

2_ Autenticación y seguridad:

-bcrypt → hashing de contraseñas.
-express-session → manejo de sesiones server-side.
-connect-redis → integración de Redis como store de sesiones.
-redis → cliente oficial para Redis.
-passport + passport-local → estrategia de login con usuario/clave.
-jsonwebtoken → opcional si querés híbrido JWT + sesiones.
-csurf → protección CSRF.
-cookie-parser → manejo de cookies.
-helmet → cabeceras de seguridad.
-cors → control de orígenes.

3_ Utilidades:

-morgan → logging de requests.
-express-validator → validación de inputs.
-nodemon (dev) → recarga automática en desarrollo.

## ESTRUCTURA DEL PROYECTO:

project-root/
│── package.json
│── .env
│── server.js             # punto de entrada
│── readme.md
│
├── config/               
│   ├── db.js             # conexión DB (si usás Mongo/Postgres)
│   ├── redis.js          # conexión Redis
│   └── passport.js       # estrategia local con passport
│
├── middleware/           
│   ├── auth.js           # verificación de sesión/JWT
│   ├── rbac.js           # control de roles
│   └── errorHandler.js   # manejo centralizado de errores
│
├── routes/               
│   └── v1/
│       ├── users.js      # registro, perfil, listado
│       └── auth.js       # login, logout, refresh
│
├── controllers/          
│   ├── usersController.js
│   └── authController.js
│
├── models/               
│   └── user.js           # esquema de usuario
│
├── services/             
│   └── sessionService.js # lógica de sesiones con Redis
│
└── utils/                
    ├── logger.js
    └── helpers.js


## 🚀 Flujo de implementación

1_ Inicializar proyecto → npm init -y + instalar dependencias.

2_ Configurar .env → SESSION_SECRET, REDIS_URL, DB_URL.

3_ server.js → montar Express, middlewares globales (helmet, cors, morgan).

4_ Sesiones → express-session con Redis store, TTL definido.

5_ Registro de usuario → usersController.register con bcrypt para hash.

6_ Login → authController.login con passport-local, genera sesión en Redis.

7_ Logout → destruir sesión en Redis.

8_ RBAC middleware → control de roles en rutas protegidas.

9_ Seguridad → cookies seguras (HttpOnly, Secure, SameSite), CSRF tokens.