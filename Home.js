import React, { useRef } from 'react'
import { Link } from'react-router-dom'

function Home() {
    const inputName = useRef();
    const inputDesc = useRef();
    const inputCondition = useRef();
    const inputGenre = useRef();

   
    const fetchValues = (event) => {
        const formData = {
            name: inputName.current.value,
            description: inputDesc.current.value,
            condition: inputCondition.current.value,
            genre: inputGenre.current.value,
          };
       
        if (
            !inputName.current.value ||
            !inputDesc.current.value ||
            !inputCondition.current.value ||
            !inputGenre.current.value
          ){
            alert('Please fill in all fields');
            
            return;
        }
       if (inputName.current && inputDesc.current && inputCondition.current && inputGenre.current){
        
        const existingDate = JSON.parse(localStorage.getItem('saved data')) || [];
        
        localStorage.setItem('saved data', JSON.stringify([...existingDate, formData]));
        
      
       alert('Game saved successfully');
          
       }
   
       event.preventDefault();
        

    }
  return (
    <div className='main-container'>
        <Link to="/saved">History</Link>
        <h1>Welcome to Video Games Sharing App</h1>

        <div className='form-container'>
        <div className='form'>
            <input type='text' ref={inputName} placeholder='Enter game name' required />
            <input type='text' ref={inputDesc} placeholder='Enter game description' required />
            <input type='text' ref={inputCondition} placeholder='Enter game condition (new, slightly used, used)' required />
            <input type='text' ref={inputGenre} placeholder='Enter game genre (shooter, action, simulator)' required />
            <button onClick={fetchValues}>Save</button>
           
            </div>
        </div>
    </div>
  )
}

export default Home