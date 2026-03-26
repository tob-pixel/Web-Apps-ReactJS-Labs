import React from 'react';
import Filters from './Filters.jsx';
import BookList from './BookList.jsx';

const MainContent = ({ books, toggleReadStatus }) => {
  return (
    <main style={{ minHeight: '80vh' }}>
      <Filters />
      <BookList books={books} toggleReadStatus={toggleReadStatus} />
    </main>
  );
};

export default MainContent;
