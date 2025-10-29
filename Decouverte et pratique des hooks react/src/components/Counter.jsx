import React, { useState } from 'react';

function Counter() {
  // État : valeur du compteur
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter
  const increment = () => {
    setCount(count + 1);
  };

  // Fonction pour décrémenter
  const decrement = () => {
    setCount(count - 1);
  };

  // Fonction pour réinitialiser
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '20px'
    }}>
      <h3>Compteur Simple</h3>
      
      <div>{count}</div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={decrement}> -1</button>
        <button onClick={reset}> Reset </button>
        <button onClick={increment}> +1 </button>
      </div>
    </div>
  );
}

export default Counter;