import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Fiction');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !year.trim()) return;

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      genre: genre,
      year: parseInt(year) || new Date().getFullYear(),
      isRead: false
    };

    addBook(newBook);

    setTitle('');
    setAuthor('');
    setGenre('Fiction');
    setYear('');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    backgroundColor: 'var(--card-bg, #fff)'
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--input-bg)',
    color: 'var(--text-color)'
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h3 style={{ marginTop: 0 }}>Add a New Book</h3>
      <input
        style={inputStyle}
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <select style={{ ...inputStyle, flex: 1 }} value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Biography">Biography</option>
        </select>
        <input
          style={{ ...inputStyle, flex: 1 }}
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ padding: '10px', cursor: 'pointer', backgroundColor: 'var(--success-text)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
