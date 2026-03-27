import React, { useState, useEffect } from 'react';
import './styles/variables.css';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

const initialBooksData = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925, isRead: false },
  { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', year: 2011, isRead: true },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Science', year: 2008, isRead: false },
  { id: 4, title: '1984', author: 'George Orwell', genre: 'Fiction', year: 1949, isRead: true },
  { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960, isRead: false }
];

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books-data');
    return savedBooks ? JSON.parse(savedBooks) : initialBooksData;
  });
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    // Відповідно до завдання: зчитування даних при першому рендері
    const savedBooks = localStorage.getItem('books-data');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  useEffect(() => {
    // Автоматичне збереження масиву даних у localStorage при кожній зміні
    localStorage.setItem('books-data', JSON.stringify(books));
  }, [books]);

  const toggleReadStatus = (id) => {
    setBooks(prevBooks => 
      prevBooks.map(book => 
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const addBook = (newBook) => {
    setBooks(prev => [...prev, newBook]);
  };

  const removeBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const readCount = books.filter(book => book.isRead).length;

  const filteredBooks = filterCategory === 'All' 
    ? books 
    : books.filter(book => book.genre === filterCategory);

  return (
    <>
      <Header readCount={readCount} />
      <MainContent 
        books={filteredBooks} 
        toggleReadStatus={toggleReadStatus}
        removeBook={removeBook}
        addBook={addBook}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <Footer />
    </>
  );
}

export default App;
