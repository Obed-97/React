import './App.css'
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SearchTask from './components/SearchTask';

function App() {
  // État : liste des tâches
  const [todos, setTodos] = useState([
    { id: 1, name: 'Acheter du pain', done: false },
    { id: 2, name: 'Réviser React', done: false },
    { id: 3, name: 'Faire les courses', done: true }
  ]);

  // État : terme de recherche
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour ajouter une nouvelle tâche
  const addTodo = (name) => {
    const newTodo = {
      id: Date.now(),
      name: name,
      done: false
    };
    setTodos([...todos, newTodo]);
  };

  // Fonction pour basculer le statut d'une tâche
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // Fonction pour supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Fonction pour supprimer toutes les tâches
  const deleteAllTodos = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches ?')) {
      setTodos([]);
    }
  };

  // Filtrer les tâches selon le terme de recherche
  const filteredTodos = todos.filter(todo =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculer le nombre de tâches restantes (non terminées)
  const remainingTasks = todos.filter(todo => !todo.done).length;

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Ma liste des tâches</h1>
      
      <div style={{ 
        marginBottom: '20px', 
        padding: '10px', 
        backgroundColor: '#e3f2fd', 
        borderRadius: '4px',
        textAlign: 'center'
      }}>
        <strong>Tâches restantes : {remainingTasks}</strong>
      </div>

      <AddTodo addTodo={addTodo} />
      <SearchTask searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList 
        todos={filteredTodos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />

      {todos.length > 0 && (
        <button
          onClick={deleteAllTodos}
          style={{
            padding: '10px 20px',
            width: '100%',
            marginTop: '20px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Tout supprimer
        </button>
      )}
    </div>
  );
}

export default App;