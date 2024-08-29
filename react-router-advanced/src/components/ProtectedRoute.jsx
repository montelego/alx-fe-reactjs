/*
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
*/

// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function ProtectedRoute({ element }) {
  const isAuthenticated = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
