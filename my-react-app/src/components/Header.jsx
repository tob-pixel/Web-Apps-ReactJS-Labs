import React from 'react';
import { NavLink } from 'react-router';

const Header = ({ readCount }) => {
  return (
    <header style={{
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1>BookShelf</h1>
        <p>Your Personal Virtual Library</p>
        <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'var(--secondary-color, #ffeb3b)' : 'white', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
          <NavLink to="/books" style={({ isActive }) => ({ color: isActive ? 'var(--secondary-color, #ffeb3b)' : 'white', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Books</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'var(--secondary-color, #ffeb3b)' : 'white', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>About</NavLink>
        </nav>
      </div>
      {readCount !== undefined && (
        <div style={{ backgroundColor: 'white', color: 'var(--primary-color)', padding: '5px 10px', borderRadius: '15px', fontWeight: 'bold' }}>
          Books Read: {readCount}
        </div>
      )}
    </header>
  );
};

export default Header;