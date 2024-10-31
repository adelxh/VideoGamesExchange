import React, { useEffect, useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import placeholder from './placeholder.jpeg';

function Saved() {
  const [savedGames, setSavedGames] = useState([]); 

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('saved data')) || [];
    setSavedGames(data);
  }, []); 
  
  
  return (
    <div className='history-container'>
       <Link to='/' className='back-link'>Home</Link>
      <h1>Browse Saved Games</h1>
      <div className='game'>
        
      {savedGames.length > 0 ? (
        savedGames.map((item, index) => (
          <div className='div-game' key={index}>
              <img src={placeholder} alt='Game' />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
           <div className='description'>
            <p><b>Condition:</b> {item.condition}</p>
            <p><b>Genre:</b> {item.genre}</p>
           
            
            </div>
           
          </div>
        ))
      ) : (
        <h3>No saved items yet.</h3>
      )}

      </div>
      

     
    </div>
    
  )
}

export default Saved