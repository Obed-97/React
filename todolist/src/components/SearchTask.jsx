import React from 'react';

function SearchTask({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher une tâche..."
        style={{
          padding: '10px',
          width: '95%',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}

export default SearchTask;