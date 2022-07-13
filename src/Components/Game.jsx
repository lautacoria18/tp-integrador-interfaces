import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import lizard from '../Media/lizard.svg';
import paper from '../Media/paper.svg';
import rock from '../Media/rock.svg';
import scissors from '../Media/scissors.svg';
import spock from '../Media/spock.svg';
import Win from '../Media/win.mp3';
import Lose from '../Media/fail.mp3'
import Mistery from '../Media/tie.webm'
import '../Styles/Game.css';
import useSound from 'use-sound';
import On from '../Media/on.png'
import Off from '../Media/off.png'

const Game = () => {

    const [playWin, { stop: stopWin }] = useSound(Win);
    const [playLose, { stop: stopLose }] = useSound(Lose);
    const [playTie, { stop: stopTie }] = useSound(Mistery);
    const [isMuted, setIsMuted] = useState(false);
    const plays= ["lizard", "paper", "rock", "scissors", "spock" ];

    const [player1Play, setPlayer1Play] = useState(null);
    const [comPlay, setComPlay] = useState(null);

    const [result, setResult] = useState(null);
    const [player1Score, setPlayer1Score] =useState(0);
    const [player2Score, setPlayer2Score] =useState(0);



    
    useEffect(() => {
        
 
        if (player1Play !== null || comPlay !== null){
        if (checkHands(player1Play,comPlay) === player1Play){
                setResult("YOU WIN");
                setPlayer1Score(player1Score+1);
                if (!isMuted){
                    playWin()
                }
        }
        else if (checkHands(player1Play,comPlay) === comPlay){
                  setResult("YOU LOSE");
                  setPlayer2Score(player2Score+1);
                  if (!isMuted){
                    playLose()
                }
        }
        else if (checkHands(player1Play,comPlay) === "tie"){
                        setResult("TIE");
                        if (!isMuted){
                            playTie()
                        }
        }
        else{
            setResult(null)
        }
        }
        
      }, [comPlay]); 

    

    const checkHands= (p1, p2) => {

        let currentPlays = [p1, p2]

        
        if (currentPlays.includes("scissors") && currentPlays.includes("paper")){
            return "scissors";
        }
        else if (currentPlays.includes("paper") && currentPlays.includes("rock")){
            return "paper";
        }
        else if (currentPlays.includes("lizard") && currentPlays.includes("rock")){
            return "rock";
        }
        else if (currentPlays.includes("lizard") && currentPlays.includes("spock")){
            return "lizard";
        }
        else if (currentPlays.includes("spock") && currentPlays.includes("scissors")){
            return "spock";
        }
        else if (currentPlays.includes("lizard") && currentPlays.includes("scissors")){
            return "scissors";
        }
        else if (currentPlays.includes("lizard") && currentPlays.includes("paper")){
            return "lizard";
        }
        else if (currentPlays.includes("paper") && currentPlays.includes("spock")){
            return "paper";
        }
        else if (currentPlays.includes("spock") && currentPlays.includes("rock")){
            return "spock";
        }
        else if (currentPlays.includes("rock") && currentPlays.includes("scissors")){
            return "rock";
        }
        else if (p1===p2){
            return "tie"
        }
    }
    
    const PlaySelected = ({image}) => {
        switch (image) {
            case "rock":
                return(
                    <>
                      <img src={rock} alt=""/>
                    </>  
                  )
            case "paper":
                return(
                    <>
                      <img src={paper} alt=""/>
                    </>  
                  )
            case "scissors":
                return(
                    <>
                      <img src={scissors} alt=""/>
                    </>  
                  )
            case "lizard":
                    return(
                        <>
                          <img src={lizard} alt=""/>
                        </>  
                      )
            case "spock":
                    return(
                            <>
                              <img src={spock} alt=""/>
                            </>  
                          )
                             default:
 
          }
        
      }

      const playAHand = (value) => {
       
        setPlayer1Play(value);
        setComPlay(plays[Math.floor(Math.random() * 5)]);
      }


const resetValues = () =>{
    setPlayer1Play(null);
    setComPlay(null);
    setResult(null);
    stopWin();
    stopLose();
    stopTie();

}
  
    return(
        <div className='videogame' >
            <div className='versus'>
                <div className='yourOptions' style={{  
                                                pointerEvents: player1Play != null ? 'none' : 'auto',
                                                    }}>
                    <div className='column-player1'>
                            <h1>Player 1</h1>
                            <div className='images' >
                                <img src={lizard} alt="lizard" onClick={() => {playAHand("lizard")}} />
                                <img src={paper} alt="paper" onClick={() => {playAHand("paper")}} />
                                <img src={rock} alt="rock" onClick={() => {playAHand("rock")}}/>
                                <img src={scissors} alt="scissors" onClick={() => {playAHand("scissors")}} />
                                <img src={spock} alt="spock" onClick={() => {playAHand("spock")}} />
                            </div>
                    </div>
                    <div className='container-play'> 
                            <div className= 'play-selected'>
                                <h2>PLAYER 1 PLAY</h2>
                                <PlaySelected image={player1Play}  />
                            </div>
                    </div>
                </div>
                <div className='mid-container'>
                <img className='audio' src={isMuted ? Off : On} alt="audio" onClick={ () => isMuted ? setIsMuted(false) : setIsMuted(true)} />
                    <div className='score'>
                        <h3>SCORE</h3>
                        <h3>{player1Score}-{player2Score}</h3>
                    </div>
                    <div className='text-alert'>
                        {player1Play === null ? <h3>MAKE YOUR CHOICE!</h3> : null }
                    </div>
                    <button className='btn-pa' onClick={() => resetValues()}>PLAY AGAIN</button>
                    <h3 className='winner'>{result}</h3>
                </div>
                <div className='rivalOptions'>
                    <div className='container-play'> 
                        <div className= 'play-selected'>
                            <h2>COM PLAY</h2>
                            <PlaySelected image={comPlay}  />
                        </div>
                    </div>
                    <div className='column-rival'>
                        <h1>COM</h1>
                        <div className='images'>
                                <img src={lizard} alt="lizard"  />
                                <img src={paper} alt="paper" />
                                <img src={rock} alt="rock" />
                                <img src={scissors} alt="scissors" />
                                <img src={spock} alt="spock" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
    
    }

export default Game;