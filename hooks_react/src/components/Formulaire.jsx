import React, { useState } from 'react';

function Formulaire() {
  // État : prénom
  const [prenom, setPrenom] = useState('');
  
  // État : email
  const [email, setEmail] = useState('');

  return (
    <div >
      <h2>Formulaire Simple</h2>

      <div style={{ marginBottom: '10px' }}>
       
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Entrez votre prénom"
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
       
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrez votre email"
          
        />
      </div>

      <div style={{ textAlign: 'left' }}>
        <p>Prénom : {prenom || ''}</p>
        <p>Email : {email || ''}</p>
      </div>
    </div>
  );
}

export default Formulaire;