## 🌀 ServiceSphere

**ServiceSphere** is a full-stack service management web platform that connects users with available services.
It features secure authentication, dynamic service listings, and admin tools for managing users, services, and messages — built with the **MERN stack** and **Vite** for a fast, modern UI.

🌐 **Live Demo:** [ServiceSphere URL](https://servicesphere-frontend.onrender.com)

---

## 🚀 Features

### 👤 User Side

* Register and log in securely using JWT-based authentication.
* Explore and view available services.
* Send contact or feedback messages.
* Manage personal account details.

### 🛠️ Admin Side

* Admin dashboard for managing:

  * Users
  * Services
  * Contact messages
* Protected routes with authentication middleware.

### ⚙️ Core

* RESTful APIs with Express.js.
* MongoDB for data storage.
* Error handling and validation middleware.
* Fully responsive frontend with React + Tailwind CSS.

---

## 🧰 Tech Stack

| Layer          | Technology                  |
| -------------- | --------------------------- |
| **Frontend**   | React, Vite, Tailwind CSS   |
| **Backend**    | Node.js, Express.js         |
| **Database**   | MongoDB, Mongoose           |
| **Auth**       | JWT (JSON Web Tokens)       |
| **Validation** | Express Validator           |
| **Hosting**    | Render (Frontend + Backend) |

---

## 📂 Project Structure

```
ServiceSphere-main/
│
├── 01_server/                # Backend (Node.js + Express)
│   ├── index.js              # Server entry point
│   ├── Router/               # Route definitions (auth, admin, contact, service)
│   ├── controllers/          # Business logic
│   ├── middleware/           # Authentication, validation, error handling
│   ├── models/               # Mongoose schemas (User, Service, Contact)
│   ├── utils/Database.js     # MongoDB connection
│   └── validators/           # Input validators
│
├── 02_client/                # Frontend (React + Vite)
│   ├── index.html
│   ├── src/                  # React components, pages, and hooks
│   ├── public/               # Static assets
│   └── vite.config.js
│
└── README.md                 # This file
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ServiceSphere.git
cd ServiceSphere-main
```

### 2️⃣ Setup the backend

```bash
cd 01_server
npm install
```

Create a `.env` file inside `01_server/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm run dev
```

### 3️⃣ Setup the frontend

```bash
cd ../02_client
npm install
npm run dev
```

Access the app at [http://localhost:5173](http://localhost:5173)

---

## 📡 API Endpoints (Backend)

| Endpoint             | Method          | Description                         |
| -------------------- | --------------- | ----------------------------------- |
| `/api/auth/register` | POST            | Register a new user                 |
| `/api/auth/login`    | POST            | Login user                          |
| `/api/services`      | GET             | Get all services                    |
| `/api/contact`       | POST            | Send a contact message              |
| `/api/admin/*`       | GET/POST/DELETE | Admin management routes (protected) |

---
