# SDE1_Asssignment
# User Feedback System

A simple web application for collecting and managing user feedback. The project includes a **React.js** frontend, a **Node.js + Express.js** backend, and a **MongoDB** database for storing feedback data.

---

## Features

- **Frontend**:  
  - User-friendly feedback submission form.
  - Dashboard to view and manage feedback with filter and sort options.

- **Backend**:  
  - REST API for handling feedback submission and retrieval.
  - Secure and efficient server setup with proper middleware.

- **Database**:  
  - MongoDB for storing feedback data.
  - Data model includes:
    - `username`: User's name.
    - `email`: User's email address.
    - `feedbackText`: Feedback content.
    - `category`: Feedback type (suggestion, bug report, feature request).
    - `timestamp`: Date and time of submission.

---

## Prerequisites

- **Node.js** (v14+)
- **npm** (v6+)
- **MongoDB** (local or cloud-based)
- **React** (create-react-app for frontend setup)

---

## Installation and Setup

### **Backend Setup**

1. Navigate to the `backend` directory:
   ```bash
   cd backend
2. Install dependencies
    npm install

3. Start the backend server:
    node server.js

    The backend server will run on http://localhost:5000.

### **Frontend Setup**
1. Navigate to the frontend directory:
    cd frontend

2. Install dependencies
    npm install

3. Start the frontend server:
    npm start

    The application will run on http://localhost:3000.

