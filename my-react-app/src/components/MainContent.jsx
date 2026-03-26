import React from 'react';
import Filters from './Filters.jsx';
import BookList from './BookList.jsx';

const MainContent = ({ books }) => {
  return (
    <main style={{ minHeight: '80vh' }}>
      <Filters />
      <BookList books={books} />
    </main>
  );
};

export default MainContent;
