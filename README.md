## Purpose of This Assignment

The goal of this assignment is to **strengthen the concepts of authentication, authorization, and role-based access control (RBAC)** in a full-stack application. By fixing the issues in this broken project, students will gain hands-on experience with:

- **Hashing passwords**: Ensuring that sensitive data like user passwords are securely stored in the database.
- **JWT Authentication**: Implementing a secure method for user authentication with JSON Web Tokens (JWTs).
- **Role-Based Access Control**: Restricting access to certain routes based on the user’s role, ensuring that only authorized users (like admins) can access protected areas.
- **Middleware Implementation**: Understanding how to use middleware for authentication and authorization checks.
- **Environment Configuration**: Properly using environment variables to keep sensitive information like database URIs and JWT secrets secure.

---

## Project Structure

Here’s a brief overview of the project structure:

```
├── backend/
│   ├── models/
│   │   └── User.js            # User schema (with issues)
│   ├── middleware/
│   │   └── authMiddleware.js  # Authentication & Authorization middleware (with issues)
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes (with issues)
│   │   └── adminRoutes.js     # Admin routes (with issues)
│   ├── server.js              # Main entry point (with issues)
│   └── .env                   # Environment variables (missing in broken version)
└── frontend/                  # React frontend (to be connected with backend)
```

---

## Issues with the Current Implementation

The project is intentionally left **broken** to guide students in fixing common issues in the backend setup. Below are the main issues students need to fix:

### 1. **Password Hashing (Broken in `authRoutes.js`)**
   - The password is stored as plaintext in the database, which is highly insecure.
   - **What needs to be fixed**: Use `bcryptjs` to hash the password before saving it to the database.

### 2. **JWT Authentication (Broken in `authRoutes.js` and `authMiddleware.js`)**
   - The JWT token is generated, but the password is not correctly compared (plaintext is being compared with the input).
   - **What needs to be fixed**: 
     - Use `bcryptjs` to compare the plaintext password with the hashed password stored in the database.
     - Implement a middleware that properly verifies the JWT token in incoming requests.

### 3. **Role-Based Authorization (Broken in `adminRoutes.js`)**
   - The `isAdmin` middleware does not check the user's role to ensure that only users with the `admin` role can access protected routes.
   - **What needs to be fixed**: Implement logic to check if the user has the `admin` role after verifying the JWT token.

### 4. **Environment Variables (Broken in `.env` file)**
   - The `.env` file containing environment-specific variables like `JWT_SECRET` and `MONGO_URI` is missing.
   - **What needs to be fixed**: Create a `.env` file and populate it with the necessary environment variables:
     - `JWT_SECRET`: Secret key for signing JWT tokens.
     - `MONGO_URI`: URI to connect to the MongoDB database.

### 5. **CORS Handling (Not Implemented)**
   - The backend does not handle cross-origin resource sharing (CORS), so requests from the frontend might be blocked.
   - **What needs to be fixed**: If working with a separate frontend, configure CORS to allow frontend requests to the backend.

---

## Student Fixes

- **Backend Task**: Define the User schema in models/user.js, ensuring the role field is set correctly.
- **Backend Task**: Implement the JWT verification middleware in middleware/authMiddleware.js.
- **Backend Task**: Add routes for registration, login, and the admin dashboard in routes/authRoutes.js.
- **Frontend Task**: Implement the login form and logic in pages/Home.jsx to authenticate users.
- **Frontend Task**: Add role verification to pages/Admin.jsx to ensure only admins can access the admin page.
- **Frontend Task**: Create a private route component to protect access to the admin page.
- **Frontend Task**: Add conditional rendering in Admin.jsx to show a "confidential" message for non-admin users.
- **Frontend Task**: Set up a logout functionality that clears the JWT token from localStorage.
---

## Conclusion

By fixing these issues, students will gain a solid understanding of the following concepts:

- **Password Security**: Hashing passwords before storing them.
- **JWT Authentication**: Generating and verifying JWT tokens for user authentication.
- **Role-Based Access Control (RBAC)**: Protecting routes based on the user's role (admin or user).
- **Middleware**: Using middleware for authentication and authorization checks.
- **Environment Variables**: Using a `.env` file to securely store sensitive information.
- **CORS**: Enabling CORS to allow requests from a different frontend server.

This assignment will help you develop a deeper understanding of building secure, scalable backend applications with proper authentication and authorization mechanisms.
