import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
