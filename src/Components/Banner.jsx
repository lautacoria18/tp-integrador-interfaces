import React from 'react'
import './Banner.css';
export default function Banner() {
  return (
    <div className='navbar'>
    <div className='title'>Rock Paper Scissors Lizard Spock</div>
    <div className='nav-buttons'> 

    <a href={`/`}><button> VS COM </button></a>
    <a href={`/multiplayer`}><button> VS PLAYER 2 </button></a>
  
    </div>
    </div>
  )
}
