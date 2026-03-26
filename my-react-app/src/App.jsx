import React from 'react';
import './styles/variables.css';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

const booksData = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925 },
  { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', year: 2011 },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Science', year: 2008 },
  { id: 4, title: '1984', author: 'George Orwell', genre: 'Fiction', year: 1949 },
  { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960 }
];

function App() {
  return (
    <>
      <Header />
      <MainContent books={booksData} />
      <Footer />
    </>
  );
}

export default App;
