import React from 'react';

const Filters = () => {
  const categories = ['All', 'Fiction', 'Non-Fiction', 'Science', 'History'];

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 }}>
        {categories.map(category => (
          <li key={category} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Filters;