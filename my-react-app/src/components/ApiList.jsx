import React, { useState, useEffect } from 'react';

export default function ApiList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://dummyjson.com/quotes?limit=5');
        
        if (!res.ok) {
          throw new Error(`Помилка запиту: ${res.status}`);
        }

        const data = await res.json();
        setItems(data.quotes);
      } catch (e) {
        setError(e.message || 'Невідома помилка');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="api-list-section" style={{ marginTop: '2rem', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '1rem', color: '#333' }}>Цитати з книг</h2>

      {loading && <p>Завантаження...</p>}

      {error && (
        <p style={{ color: 'crimson', fontWeight: 'bold' }}>⚠️ Обережно, помилка: {error}</p>
      )}

      {!loading && !error && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
              <p style={{ fontStyle: 'italic', margin: '0 0 0.5rem 0' }}>"{item.quote}"</p>
              <div style={{ textAlign: 'right', fontWeight: 'bold', color: '#555', fontSize: '0.9em' }}>— {item.author}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
