import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';

export default function BookDetailsPage({ books }) {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Convert id from string to number for comparison
    const book = books.find(b => String(b.id) === id);

    if (!book) {
        return (
            <main style={{ minHeight: '80vh', padding: '20px' }}>
                <section>
                    <div>
                        <h2>Book Not Found</h2>
                        <p>Sorry, the book with ID <strong>{id}</strong> does not exist in your list.</p>
                        <Link to="/books" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>← Return to List</Link>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main style={{ minHeight: '80vh', padding: '20px' }}>
            <section>
                <div>
                    <button onClick={() => navigate('/books')} style={{
                        padding: '8px 12px',
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>← Back to List</button>
                    
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <img src="https://via.placeholder.com/200x300" alt={book.title} style={{ borderRadius: '8px' }} />
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    {book.genre}
                                </span>
                                <span>ID: {book.id}</span>
                            </div>
                            <h2 style={{ marginTop: '10px' }}>{book.title}</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text)' }}>By {book.author}</p>
                            <p><strong>Published Year:</strong> {book.year}</p>
                            
                            <div style={{ marginTop: '15px', padding: '10px', backgroundColor: book.isRead ? 'var(--success-bg)' : 'var(--input-bg)', borderRadius: '4px', display: 'inline-block' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: book.isRead ? 'var(--success-text)' : 'var(--warning-color)',
                                    marginRight: '8px'
                                }}></span>
                                <strong>Status:</strong> {book.isRead ? 'Read' : 'Unread'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
