import React from 'react';
import Filters from './Filters.jsx';
import BookList from './BookList.jsx';

const MainContent = ({ books, toggleReadStatus, filterCategory, setFilterCategory }) => {
  return (
    <main style={{ minHeight: '80vh' }}>
      <Filters filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      <BookList books={books} toggleReadStatus={toggleReadStatus} />
    </main>
  );
};

export default MainContent;
