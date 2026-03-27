import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <main style={{ minHeight: '80vh', padding: '20px', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Go back to Home</Link>
    </main>
  );
};

export default NotFoundPage;
