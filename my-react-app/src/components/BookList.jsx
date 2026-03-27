import React from 'react';
import BookCard from './BookCard.jsx';

const BookList = ({ books, toggleReadStatus, removeBook }) => {
  if (books.length === 0) {
    return (
      <section style={{ padding: '40px 20px', textAlign: 'center', color: '#666' }}>
        <h2>No items found based on the current filter</h2>
        <p>Please select another category or check back later.</p>
      </section>
    );
  }

  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {books.map(book => (
        <BookCard key={book.id} book={book} toggleReadStatus={toggleReadStatus} removeBook={removeBook} />
      ))}
    </section>
  );
};

export default BookList;
