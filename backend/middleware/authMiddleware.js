// Middleware to verify if the user is authenticated
const verifyToken = (req, res, next) => {
    // Issue: No JWT verification here yet
    next(); // Should check JWT here
  };
  
  // Middleware to verify if the user is an admin
  const isAdmin = (req, res, next) => {
    // Issue: Should check for the role of the user (admin or user)
    next(); // Should check role and decide if allowed
  };
  
  module.exports = { verifyToken, isAdmin };
  