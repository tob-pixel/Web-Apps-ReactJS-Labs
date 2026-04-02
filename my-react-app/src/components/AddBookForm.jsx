import React, { useState } from 'react';
import { Card, Input, Button } from './ui';

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

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--input-bg)',
    color: 'var(--text-color)'
  };

  return (
    <Card style={{ maxWidth: '400px', margin: '20px auto' }}>
      <form onSubmit={handleSubmit}>
        <Card.Header style={{ borderBottom: 'none', paddingBottom: '0' }}>
          <h3 style={{ marginTop: 0, color: 'var(--color-text)' }}>Add a New Book</h3>
        </Card.Header>
        <Card.Body style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Input
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <select style={{ ...inputStyle, flex: 1, backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)' }} value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science">Science</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Biography">Biography</option>
            </select>
            <Input
              type="number"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              style={{ flex: 1 }}
            />
          </div>
        </Card.Body>
        <Card.Footer style={{ borderTop: 'none', justifyContent: 'flex-start' }}>
          <Button type="submit" variant="primary" style={{ width: '100%' }}>
            Add Book
          </Button>
        </Card.Footer>
      </form>
    </Card>
  );
};

export default AddBookForm;
