import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>Page not found</p>
    <Link to="/">Home</Link>
  </div>
);

export default NotFoundPage;
