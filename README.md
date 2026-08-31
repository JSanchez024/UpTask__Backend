# 🚀 Uptask - Backend API
> 🔗 [UpTask]([https://tu-dominio-o-despliegue.com](https://uptask-frontend-orpin.vercel.app/auth/login))

> API REST robusta para la gestión de proyectos y tareas. Construida con Node.js, Express y MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-16.0+-green?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.0+-black?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-5.0+-green?style=flat-square&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Características

- 🔐 Autenticación JWT segura
- 📊 API RESTful completa
- ✅ Validación robusta de datos
- 🗄️ Base de datos MongoDB escalable
- 📝 Documentación con Swagger
- ⚡ Middleware personalizado
- 🧪 Pruebas unitarias incluidas
  
## 📁 Estructura del Proyecto

```
src/
├── models/              # Esquemas Mongoose
│   ├── User.ts
│   ├── Project.ts
│   └── Task.ts
├── routes/              # Rutas API
│   ├── auth.routes.ts
│   ├── project.routes.ts
│   └── task.routes.ts
├── controllers/         # Lógica de negocio
│   ├── authController.ts
│   ├── projectController.ts
│   └── taskController.ts
├── middleware/          # Middleware personalizado
│   ├── authMiddleware.ts
│   ├── errorHandler.ts
│   └── validation.ts
├── types/               # Tipos TypeScript
│   └── index.ts
├── config/              # Configuración
│   └── database.ts
├── utils/               # Funciones auxiliares
│   └── jwt.utils.ts
└── server.ts            # Punto de entrada
```

## 🔌 Endpoints API

### Autenticación

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Registrar usuario | ❌ |
| POST | `/api/auth/login` | Iniciar sesión | ❌ |
| GET | `/api/auth/profile` | Obtener perfil | ✅ |
| POST | `/api/auth/logout` | Cerrar sesión | ✅ |

### Proyectos

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/api/projects` | Obtener todos | ✅ |
| GET | `/api/projects/:id` | Obtener por ID | ✅ |
| POST | `/api/projects` | Crear proyecto | ✅ |
| PUT | `/api/projects/:id` | Actualizar | ✅ |
| DELETE | `/api/projects/:id` | Eliminar | ✅ |

### Tareas

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/api/tasks` | Obtener todas | ✅ |
| POST | `/api/tasks` | Crear tarea | ✅ |
| PUT | `/api/tasks/:id` | Actualizar | ✅ |
| DELETE | `/api/tasks/:id` | Eliminar | ✅ |

## 🛠️ Tecnologías Principales

- **Node.js & Express** - Framework backend
- **TypeScript** - Tipado estático
- **MongoDB & Mongoose** - Base de datos
- **JWT** - Autenticación segura
- **Bcrypt** - Encriptación de contraseñas
- **Zod** - Validación de datos
- **Cors** - Control de acceso
- **Jest** - Testing

## 📚 Documentación Adicional

- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [JWT.io](https://jwt.io)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## 👤 Autor

**JSanchez024**
- GitHub: [@JSanchez024](https://github.com/JSanchez024)

---

⭐ Si te fue útil, considera darle una estrella al repositorio
