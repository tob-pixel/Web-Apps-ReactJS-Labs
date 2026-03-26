import React from 'react';

const BookCard = ({ book }) => {
  const cardStyle = {
    backgroundColor: 'var(--card-bg)',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '200px'
  };

  return (
    <div style={cardStyle}>
      <img 
        src="https://via.placeholder.com/150x200" 
        alt={book.title} 
        style={{ width: '100%', borderRadius: '4px' }} 
      />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
    </div>
  );
};

export default BookCard;