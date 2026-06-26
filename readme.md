# 🔐 Laboratorio 11 - Autenticación JWT con Django REST Framework y Angular

# 👨‍🏫 Profesor: Carlo Jose Luis Corrales Delgado

# 📚 Curso: **Desarrollo de Aplicaciones Web**

# 🎥 Video de funcionalidad :  [https://www.youtubeeducation.com/watch?v=txMiHu8rmeo]

## 📖 Descripción

Este proyecto implementa un sistema de autenticación utilizando **JSON Web Tokens (JWT)** con un backend desarrollado en **Django REST Framework** y un frontend desarrollado en **Angular 22**.

El backend expone una API REST protegida mediante JWT, mientras que el frontend permite iniciar sesión, almacenar el token de acceso y consumir endpoints protegidos.

---

# 🚀 Tecnologías utilizadas

## 🖥️ Backend

* 🐍 Python 3
* 🌐 Django
* ⚡ Django REST Framework
* 🔑 Simple JWT
* 🌍 Django CORS Headers
* 💾 SQLite

## 🎨 Frontend

* 🅰️ Angular 22
* 📘 TypeScript
* 🌐 HttpClient
* 🧩 Standalone Components

---

# 📂 Estructura del proyecto

```text
lab11/
│
├── api/
│   ├── migrations/
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py
│
├── jwt_project/
│   ├── settings.py
│   ├── urls.py
│   └── ...
│
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── login/
│   │       ├── productos/
│   │       └── services/
│   └── ...
│
├── requirements.txt
└── README.md
```

---

# ✨ Funcionalidades

* 🔐 Inicio de sesión mediante JWT.
* 🎫 Generación de Access Token y Refresh Token.
* 🛡️ Protección de endpoints mediante autenticación JWT.
* 📦 CRUD completo de productos.
* 🌐 Consumo de API REST desde Angular.
* 💾 Almacenamiento del token en Local Storage.
* 🔄 Redirección automática después del inicio de sesión.

---

# ⚙️ Instalación

## 📥 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd lab11
```

---

## 🐍 2. Crear el entorno virtual

### Linux / WSL

```bash
python3 -m venv env
source env/bin/activate
```

### Windows

```bash
env\Scripts\activate
```

---

## 📚 3. Instalar dependencias

```bash
pip install -r requirements.txt
```

---

## 🗄️ 4. Ejecutar migraciones

```bash
python manage.py migrate
```

---

## 👤 5. Crear un superusuario

```bash
python manage.py createsuperuser
```

---

## ▶️ 6. Ejecutar el servidor Django

```bash
python manage.py runserver
```

Disponible en:

```text
http://127.0.0.1:8000
```

---

# 🅰️ Frontend

Ingresar al directorio:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar Angular:

```bash
ng serve
```

Disponible en:

```text
http://localhost:4200
```

---

# 🔗 Endpoints disponibles

## 🔑 Obtener Token JWT

```http
POST /api/token/
```

### Body

```json
{
  "username": "usuario",
  "password": "contraseña"
}
```

### Respuesta

```json
{
  "refresh": "...",
  "access": "..."
}
```

---

## ♻️ Refrescar Token

```http
POST /api/token/refresh/
```

---

## 🛡️ Endpoint protegido

```http
GET /api/saludo/
```

### Cabecera requerida

```http
Authorization: Bearer <access_token>
```

---

## 📦 CRUD de Productos

| Método | Endpoint               |
| ------ | ---------------------- |
| GET    | `/api/productos/`      |
| POST   | `/api/productos/`      |
| PUT    | `/api/productos/{id}/` |
| PATCH  | `/api/productos/{id}/` |
| DELETE | `/api/productos/{id}/` |

> ⚠️ Todos los endpoints requieren autenticación mediante JWT.

---

# 🔄 Flujo de autenticación

```text
Angular
   │
   ▼
Formulario de Login
   │
   ▼
POST /api/token/
   │
   ▼
Django REST Framework
   │
   ▼
Access Token
   │
   ▼
Local Storage
   │
   ▼
GET /api/productos/
   │
   ▼
Respuesta protegida
```

---

# 🔐 Ejemplo de Authorization Header

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

# 📸 Evidencias del laboratorio

Durante el desarrollo del laboratorio se implementó:

* ✅ Configuración de Django REST Framework.
* ✅ Implementación de autenticación JWT.
* ✅ Protección de endpoints mediante permisos.
* ✅ Integración entre Angular y Django.
* ✅ Almacenamiento del Access Token.
* ✅ Consumo de endpoints protegidos.
* ✅ Configuración de CORS para comunicación entre frontend y backend.

---

# 👨‍💻 Autor

**Diego Cervantes**

🎓 Universidad Nacional de San Agustín
