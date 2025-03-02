# 🛡️ User Authentication API

This is a **Node.js-based authentication API** built with **Express and MongoDB**. It provides a secure authentication system using **JWT access tokens and refresh tokens**. The API supports **user registration, login, and logout** with token-based authentication.

## 🚀 Features

- ✅ **User Registration**: New users can sign up with their email and password.
- 🔑 **Login**: Users receive an **access token** and a **refresh token** upon successful authentication.
- 🔄 **Refresh Token**: Generates a new access token when the current one expires.
- 🚪 **Logout**: Revokes the user's refresh token to log them out.
- 🛠️ **Error Handling**: Middleware handles errors efficiently.
- 🛡️ **Secure Password Hashing**: Uses bcrypt to store passwords securely.

---

## 📁 Project Structure

```
USER AUTH/
│── config/
│   ├── connect_db.js      # Database connection
│── constants/
│   ├── httpStatus.js      # HTTP status codes
│── controllers/
│   ├── auth.controller.js # Authentication logic (register, login, logout)
│── middlewares/
│   ├── errorHandler.js    # Global error handling middleware
│── models/
│   ├── User.model.js      # User schema and database model
│── routes/
│   ├── auth.routes.js     # Authentication-related routes
│── utils/
│   ├── hashUtils.js       # Password hashing functions
│   ├── jwtUtils.js        # JWT token creation and verification
│── .env                   # Environment variables (ignored in Git)
│── .gitignore             # Git ignore file
│── index.js               # Entry point for the application
│── package.json           # Project dependencies
│── package-lock.json      # Auto-generated dependency lock file
│── node_modules/          # Installed dependencies (ignored in Git)
│── accessToken*           # Access tokens (ignored in Git)
│── refreshToken*          # Refresh tokens (ignored in Git)
```

---

## ⚡ Installation & Setup

### 1️⃣ **Clone the repository**
```sh
git clone https://github.com/sasithhansaka/express-jwt-auth.git
cd user-auth-api
```

### 2️⃣ **Install dependencies**
```sh
npm install
```

### 3️⃣ **Set up environment variables**

Create a `.env` file in the root directory and add:

```ini
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ **Run the server**
```sh
npm run dev
```
The server will run at **http://localhost:3000**.

---

## 🔥 API Endpoints

### **🔹 Register a User**
- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
    ##other files also add 
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### **🔹 Login**
- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword",
    "username":"example"
  }
  ```
- **Response**:
  ```json
  {
     "message": "User login successfully"
  }
  ```

### **🔹 Logout**
- **Endpoint**: `POST /api/auth/logout`
- 
- **Response**:
  ```json
  {
    "message": "User logged out successfully"
  }
  ```

---

## 🛠️ Technologies Used

- **Node.js** & **Express.js** - Backend framework
- **MongoDB** & **Mongoose** - Database
- **JWT (JSON Web Tokens)** - Authentication
- **Bcrypt.js** - Password hashing
- **Dotenv** - Environment variables
- **Express Middleware** - Error handling & security

---

## 📜 License

This project is licensed under the **MIT License**.
