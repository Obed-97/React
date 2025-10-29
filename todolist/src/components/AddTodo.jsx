import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue(''); // Vider le champ après ajout
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nouvelle tâche..."
        style={{
          padding: '10px',
          width: '70%',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          marginLeft: '10px',
          border: 'none',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Ajouter
      </button>
    </div>
  );
}

export default AddTodo;