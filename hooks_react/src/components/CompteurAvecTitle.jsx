import React, { useState, useEffect } from 'react';

function CompteurAvecTitle() {
  const [count, setCount] = useState(0);

  // useEffect pour mettre à jour le titre de la page
  useEffect(() => {
    document.title = `Compteur : ${count}`;
  }, [count]); // Se déclenche à chaque fois que 'count' change

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      
      <h2>Compteur avec Titre</h2>
      
      <h2>{count}</h2>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={decrement}> -1</button>
        <button onClick={reset}> Reset </button>
        <button onClick={increment}> +1 </button>
      </div>
      
    </div>
  );
}

export default CompteurAvecTitle;