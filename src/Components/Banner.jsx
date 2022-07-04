import React from 'react'
import './Banner.css';
export default function Banner() {
  

  return (
    <div className='navbar'>
      {console.log(window.location.href)}
        <div className='title'>Rock Paper Scissors Lizard Spock!</div>
        <div className='nav-buttons'> 

          <a href={`/`} style={{  
            background: window.location.href !== "http://localhost:3000/multiplayer" ?  'rgb(1, 116, 137)' : 'none',
        }}> Single Player </a>
          <a href={`/multiplayer`} style={{  
            background: window.location.href === "http://localhost:3000/multiplayer" ?  'rgb(1, 116, 137)' : 'none',
        }}> Multiplayer</a>
  
      </div>
    </div>
  )
}
