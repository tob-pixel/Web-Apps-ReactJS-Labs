import React from 'react';
import Filters from './Filters.jsx';
import BookList from './BookList.jsx';
import AddBookForm from './AddBookForm.jsx';

const MainContent = ({ books, toggleReadStatus, removeBook, addBook, filterCategory, setFilterCategory }) => {
  return (
    <main style={{ minHeight: '80vh' }}>
      <AddBookForm addBook={addBook} />
      <Filters filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      <BookList books={books} toggleReadStatus={toggleReadStatus} removeBook={removeBook} />
    </main>
  );
};

export default MainContent;
