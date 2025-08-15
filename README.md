# SOW Task 1: Full-Stack Terms Page Clone

This project is a complete, full-stack application built to fulfill a Statement of Work (SOW). It features a pixel-perfect, responsive clone of a terms & conditions page with a dynamic frontend, a Node.js backend API, and a PostgreSQL database.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://sow-fakturera-frontend.onrender.com/)
> .

---
## ✨ Features

* **Full-Stack Architecture**: A complete monorepo with a decoupled React frontend and Node.js (Fastify) backend.
* **Pixel-Perfect & Responsive UI**: The interface is designed to match the target design across all devices, from mobile phones to desktops.
* **Dynamic Content**: All text, including page content, navigation links, and buttons, is fetched dynamically from the backend API, which pulls data from a PostgreSQL database.
* **Internationalization (i18n)**: Full support for English and Swedish. Users can switch languages on the fly, and all relevant text on the page updates instantly.
* **Interactive Header**: Features a dynamic language switcher and a fully functional hamburger menu for mobile navigation.
* **Best Practices**: Demonstrates a scalable project structure, secure environment variable management (`.env`), and reusable React components.

---
## 🛠️ Tech Stack

| Category | Technology / Library |
| :--- | :--- |
| **Frontend** | React.js, Vite, Vanilla CSS |
| **Backend** | Node.js, Fastify, Sequelize (ORM) |
| **Database** | PostgreSQL |
| **Deployment** | Render (Static Site, database & Web Service) |

---
## 📂 Project Structure

This project is a monorepo containing both the `frontend` and `backend` applications in a single repository.

```
.
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env.production.example
    ├── package.json
    └── index.html
```

---
## 🚀 Getting Started Locally

Follow these instructions to set up and run the entire project on your local machine.

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or later)
* [Docker](https://www.docker.com/products/docker-desktop/) (for running the local PostgreSQL database)

### 1. Backend Setup

First, set up and run the backend server.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the PostgreSQL Database with Docker:**
    ```bash
    # This command only needs to be run once to create the container
    docker run --name pg-fakturera -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
    
    # If the container is stopped, start it with:
    docker start pg-fakturera
    ```

4.  **Set up environment variables**:
    * Create a file named `.env` inside the `backend` folder.
    * Copy the contents from `.env.example` or use the following:
        ```env
        DB_HOST=localhost
        DB_NAME=fakturera_db
        DB_USER=postgres
        DB_PASS=mysecretpassword
        ```

5.  **Set up the Database**:
    * Using a database client (like DBeaver), connect to your local Docker database.
    * Create a new database named `fakturera_db`.
    * Run the necessary `CREATE TABLE` and `INSERT` SQL scripts to populate the `terms` and `ui_translations` tables.

6.  **Start the backend server:**
    ```bash
    npm run dev 
    ```
    The server should now be running at `http://localhost:3001`.

### 2. Frontend Setup

In a **new terminal**, set up and run the React frontend.

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The application will open in your browser at `http://localhost:5173`. It will connect to your local backend server automatically.
