import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthProtectedRoute = ({ isAuthenticated, ...others }) => {
  if (isAuthenticated) {
    return <Route {...others} />;
  }
  return <Redirect to="/" />;
};

export default AuthProtectedRoute;
