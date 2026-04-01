import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book, toggleReadStatus, removeBook }) => {
  const cardStyle = {
    backgroundColor: book.isRead ? 'var(--success-bg)' : 'var(--card-bg)',
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
            backgroundColor: book.isRead ? 'var(--success-text)' : 'var(--primary-btn-bg)',
            color: book.isRead ? 'white' : 'var(--primary-btn-text)',
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
            backgroundColor: 'var(--danger-btn-bg)',
            color: 'var(--danger-btn-text)',
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
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <Link to={`/book/${book.id}`} style={{
            display: 'block',
            padding: '8px',
            backgroundColor: 'var(--details-btn-bg)',
            color: 'var(--details-btn-text)',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
        }}>Details</Link>
      </div>
    </div>
  );
};

export default BookCard;