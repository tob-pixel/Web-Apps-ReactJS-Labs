import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '1rem' }}>
      <h1>BookShelf</h1>
      <p>Your Personal Virtual Library</p>
    </header>
  );
};

export default Header;