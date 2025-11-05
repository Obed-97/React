import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Récupérer la valeur du localStorage au premier rendu
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Si une valeur existe, la parser, sinon utiliser initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Erreur lors de la lecture du localStorage:', error);
      return initialValue;
    }
  });

  // Sauvegarder dans localStorage à chaque changement de valeur
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde dans localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;