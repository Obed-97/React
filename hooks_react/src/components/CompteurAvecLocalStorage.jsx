import useLocalStorage from '../hooks/useLocalStorage';

function CompteurAvecLocalStorage() {
    // Utiliser le custom hook au lieu de useState
    const [count, setCount] = useLocalStorage('compteur', 0);


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
      
      <h2>Compteur avec Local Storage</h2>
      
      <h2>{count}</h2>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={decrement}> -1</button>
        <button onClick={reset}> Reset </button>
        <button onClick={increment}> +1 </button>
      </div>
      
    </div>
  );
}

export default CompteurAvecLocalStorage;