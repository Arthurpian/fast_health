// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, checkAuthentication }) => {
  return checkAuthentication() ? element : <Navigate to="/" />;
};

export default PrivateRoute;
