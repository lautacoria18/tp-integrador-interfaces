import React from 'react'
import { useState } from 'react'
import lizard from '../Media/lizard.svg';
import paper from '../Media/paper.svg';
import rock from '../Media/rock.svg';
import scissors from '../Media/scissors.svg';
import spock from '../Media/spock.svg';
import './Game.css';

export default function Game() {

    const plays= ["lizard", "paper", "rock", "scissors", "spock" ];
    const [actualPlay, setActualPlay] = useState("");
    const [comPlay, setComPlay] = useState("");

  return (
    <div>
            <div>
                <h3 onClick={() =>console.log(actualPlay, comPlay)} >VS COM</h3>
                <h3>VS P2</h3>
            </div>
            <div className='videogame'>
                <div >
                Choose your play!
                </div>
                <img src={lizard} alt="lizard" onClick={() => {setActualPlay("lizard")}} />
                <img src={paper} alt="lizard" onClick={() => {setActualPlay("paper")}}/>
                <img src={rock} alt="lizard" onClick={() => {setActualPlay("rock")}}/>
                <img src={scissors} alt="lizard" onClick={() => {setActualPlay("scissors")}}/>
                <img src={spock} alt="lizard" onClick={() => {setActualPlay("spock")}}/>
            </div>
            <div onClick={() => {setComPlay(plays[Math.floor(Math.random() * 5)]); console.log(actualPlay, comPlay)} }>
                PLAY
            </div>
            <div>
                <h3>COM PLAY: {comPlay}</h3>
                <h3>{"implementar funcion con la logica del juego"}</h3>

            </div>
            


    </div>
  )
}
