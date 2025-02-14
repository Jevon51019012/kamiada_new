// AuthWrapper.js
import React from "react";
import { Link, Navigate } from "react-router-dom";

const AuthWrapper = ({ children, requiredRole }) => {
  const cookies = document.cookie.split("; ").reduce((acc, current) => {
    const [name, value] = current.split("=");
    acc[name] = value;
    return acc;
  }, {});

  const isAuthenticated = cookies.token;
  const userRole = cookies.role;

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to={"/"} />; // Redirect if role does not match
  }

  return children;
};

export default AuthWrapper;
