import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div style={{ 
      padding: '10px', 
      border: '1px solid #ccc', 
      marginBottom: '5px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: todo.done ? '#c8e6c9' : '#f9f9f9', // Vert si fait, gris clair sinon
      borderLeft: todo.done ? '4px solid #4CAF50' : '4px solid #9e9e9e' // Bordure gauche colorée
    }}>
      <span 
        onClick={() => toggleTodo(todo.id)}
        style={{ 
          cursor: 'pointer',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span>{todo.done ? '✅' : '⬜'}</span>
        <span style={{ 
          textDecoration: todo.done ? 'line-through' : 'none',
          color: todo.done ? '#666' : '#000' // Texte grisé si fait
        }}>
          {todo.name}
        </span>
      </span>
      
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          padding: '5px 10px',
          border: 'none',
          backgroundColor: '#f44336',
          color: 'white',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;