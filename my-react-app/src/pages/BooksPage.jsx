import React from 'react';
import MainContent from '../components/MainContent.jsx';

const BooksPage = ({ books, toggleReadStatus, removeBook, addBook, filterCategory, setFilterCategory }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Books</h2>
      <MainContent 
        books={books} 
        toggleReadStatus={toggleReadStatus}
        removeBook={removeBook}
        addBook={addBook}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
};

export default BooksPage;
