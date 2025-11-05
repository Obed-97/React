import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Créer un intervalle qui met à jour l'heure chaque seconde
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Fonction de nettoyage (cleanup)
    return () => {
      clearInterval(intervalId);
      console.log('Intervalle nettoyé');
    };
  }, []); // [] = s'exécute uniquement au montage du composant

  // Formater l'heure
  const heures = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const secondes = time.getSeconds().toString().padStart(2, '0');

  // Formater la date
  const jour = time.getDate().toString().padStart(2, '0');
  const mois = (time.getMonth() + 1).toString().padStart(2, '0');
  const annee = time.getFullYear();

  return (
    <div>
      <h2>Horloge</h2>
      
      <div style={{
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'monospace'
      }}>
        {heures}:{minutes}:{secondes}
      </div>

    </div>
  );
}

export default Clock;