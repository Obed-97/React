import './App.css';
import React from 'react';
import Counter from './components/Counter';
import Formulaire from './components/Formulaire';
import CompteurAvecTitle from './components/CompteurAvecTitle';
import Clock from './components/Clock';
import CompteurAvecLocalStorage from './components/CompteurAvecLocalStorage';


function App() {
  <h1> Mon compteur</h1>
  return (
    <div style={{
      display: 'flex',
      gap: '35px',
      padding: '20px',
      justifyContent: 'center',
      alignItems: 'flex-start',
      
      
    }}>
      
      <div>
        <h3 style={{ color: 'gray' }}>Excercie 1</h3>
        <Counter />
      </div>
      <div style={{
        width: '2px',
        backgroundColor: '#000',
        minHeight: '400px'
      }}></div>
      <div>
        <h3 style={{ color: 'gray' }}>Excercie 2</h3>
        <Formulaire />
      </div>
      <div style={{
        width: '2px',
        backgroundColor: '#000',
        minHeight: '400px'
      }}></div>
      <div>
      <h3 style={{ color: 'gray' }}>Excercie 3</h3>
        <CompteurAvecTitle />
      </div>
      <div style={{
        width: '2px',
        backgroundColor: '#000',
        minHeight: '400px'
      }}></div>
      <div>
      <h3 style={{ color: 'gray' }}>Excercie 4</h3>
        <Clock />
      </div>
      <div style={{
        width: '2px',
        backgroundColor: '#000',
        minHeight: '400px'
      }}></div>
      <div>
      <h3 style={{ color: 'gray' }}>Excercie 5</h3>
        <CompteurAvecLocalStorage />
      </div>
    </div>
  ); 
  
}
export default App;