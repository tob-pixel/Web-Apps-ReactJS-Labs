import React from 'react';
import BookCard from './BookCard.jsx';

const BookList = ({ books, toggleReadStatus }) => {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {books.map(book => (
        <BookCard key={book.id} book={book} toggleReadStatus={toggleReadStatus} />
      ))}
    </section>
  );
};

export default BookList;
