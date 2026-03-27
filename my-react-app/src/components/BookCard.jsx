import React from 'react';

const BookCard = ({ book, toggleReadStatus, removeBook }) => {
  const cardStyle = {
    backgroundColor: book.isRead ? '#e0ffe0' : 'var(--card-bg)',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '200px',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://via.placeholder.com/150x200"
        alt={book.title}
        style={{ width: '100%', borderRadius: '4px', opacity: book.isRead ? 0.7 : 1 }}
      />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>

      <div style={{ marginTop: 'auto', paddingTop: '10px', display: 'flex', gap: '8px' }}>
        <button
          onClick={() => toggleReadStatus(book.id)}
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: book.isRead ? '#4caf50' : '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {book.isRead ? 'Mark as Unread' : 'Mark as Read'}
        </button>
        <button
          onClick={() => removeBook(book.id)}
          style={{
            padding: '8px 12px',
            backgroundColor: '#ff5252',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: 1
          }}
          title="Remove Book"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default BookCard;