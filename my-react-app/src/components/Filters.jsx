import React from 'react';

const Filters = ({ filterCategory, setFilterCategory }) => {
  const categories = ['All', 'Fiction', 'Non-Fiction', 'Science', 'History'];

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 }}>
        {categories.map(category => (
          <li 
            key={category} 
            onClick={() => setFilterCategory(category)}
            style={{ 
              cursor: 'pointer', 
              fontWeight: 'bold',
              color: filterCategory === category ? 'var(--primary-color, #007bff)' : 'inherit',
              borderBottom: filterCategory === category ? '2px solid var(--primary-color, #007bff)' : 'none',
              paddingBottom: '5px'
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Filters;