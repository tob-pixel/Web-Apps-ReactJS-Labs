import React from 'react';

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