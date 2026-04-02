import React from 'react';
import { Link } from 'react-router';
import { Card, Button, Badge } from './ui';

const BookCard = ({ book, toggleReadStatus, removeBook }) => {
  return (
    <Card hoverable style={{ width: '250px' }}>
      <img
        src="https://via.placeholder.com/150x200"
        alt={book.title}
        style={{ width: '100%', borderRadius: 'var(--radius-sm)', opacity: book.isRead ? 0.7 : 1, marginBottom: 'var(--space-4)' }}
      />
      <Card.Header style={{ paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-2)', borderBottom: 'none' }}>
        <h3 style={{ margin: '0 0 var(--space-2) 0', fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>{book.title}</h3>
        <Badge variant={book.isRead ? 'success' : 'default'} style={{ marginBottom: 'var(--space-2)' }}>
          {book.isRead ? 'Read' : 'Unread'}
        </Badge>
      </Card.Header>
      
      <Card.Body style={{ fontSize: 'var(--font-size-sm)' }}>
        <p style={{ margin: '0 0 var(--space-1) 0' }}><strong>Author:</strong> {book.author}</p>
        <p style={{ margin: '0 0 var(--space-1) 0' }}><strong>Genre:</strong> {book.genre}</p>
        <p style={{ margin: '0' }}><strong>Year:</strong> {book.year}</p>
      </Card.Body>

      <Card.Footer style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            variant={book.isRead ? "secondary" : "primary"}
            size="sm"
            onClick={() => toggleReadStatus(book.id)}
            style={{ flex: 1 }}
          >
            {book.isRead ? 'Mark as Unread' : 'Mark as Read'}
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => removeBook(book.id)}
            title="Remove Book"
          >
            &times;
          </Button>
        </div>
        <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="secondary" style={{ width: '100%' }}>
            Details
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default BookCard;