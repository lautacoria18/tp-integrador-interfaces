import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import lizard from '../Media/lizard.svg';
import paper from '../Media/paper.svg';
import rock from '../Media/rock.svg';
import scissors from '../Media/scissors.svg';
import spock from '../Media/spock.svg';
import mistery from '../Media/mistery.png';
import '../Styles/Game.css';
import useSound from 'use-sound';
import Player1 from '../Media/Player1.mp3';
import Player2 from '../Media/Player2.mp3'
import Mistery from '../Media/tie.webm'

const MultiplayerMode = () => {

    const [playP1, { stop: stopWin }] = useSound(Player1, {
        volume: 0.5,
       });
    const [playP2, { stop: stopLose }] = useSound(Player2, {
        volume: 0.5,
       });
    const [playTie, { stop: stopTie }] = useSound(Mistery);

    const [player1Play, setPlayer1Play] = useState(null);
    const [player2Play, setPlayer2Play] = useState(null);
    const [timesPlayed, setTimesPlayed] = useState(0);

    
    const [result, setResult] = useState(null);
    const [player1Score, setPlayer1Score] =useState(0);
    const [player2Score, setPlayer2Score] =useState(0);

    useEffect(() => {
        
        if (player1Play !== null || player2Play !== null){
            if (checkHands(player1Play,player2Play) === player1Play){
                    setResult("PLAYER 1 WINS!");
                setPlayer1Score(player1Score+1);
                playP1()
            }
            else if (checkHands(player1Play,player2Play) === player2Play){
                      setResult("PLAYER 2 WINS!");
                setPlayer2Score(player2Score+1);
                playP2()
                
            }
            else if (checkHands(player1Play,player2Play) === "tie"){
                            setResult("TIE");
                            playTie()
            }
            
          }}, [timesPlayed]);

          const resetValues = () =>{
            setPlayer1Play(null);
            setPlayer2Play(null);
            setResult(null);
            stopWin();
            stopLose();
            stopTie();
        }

          
        const BlindText= ({stringPlayer}) =>{
            return (
                <h3>PLAYER {stringPlayer} CLOSE YOUR EYES OR TURN AROUND, DON'T BE A CHEATER 😀</h3>
            )
        }
        const YourTurnText= ({stringPlayer}) =>{
            return (
                <h3>PLAYER {stringPlayer} MAKE YOUR CHOICE! 😱</h3>
            )
        }

        const playAHand = (value, isPlayer1) => {
            if (isPlayer1){
            setPlayer1Play(value);
                    
    
          }
          else{
            setPlayer2Play(value);
            setTimesPlayed(timesPlayed +1) 
          }
          
        }


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


          return(
            <div className='videogame' >
                <div className='versus'>
                    <div className='yourOptions' style={{  
                                            pointerEvents: player1Play != null ? 'none' : 'auto',
                                                        }}>
                        <div className='a'>
                            <h1>Player 1</h1>
                                <div className='images' >
                                    <img src={lizard} alt="lizard" onClick={() => {playAHand("lizard", true)}} />
                                    <img src={paper} alt="paper" onClick={() => {playAHand("paper", true)}} />
                                    <img src={rock} alt="rock" onClick={() => {playAHand("rock", true)}}/>
                                    <img src={scissors} alt="scissors" onClick={() => {playAHand("scissors", true)}} />
                                    <img src={spock} alt="spock" onClick={() => {playAHand("spock", true)}} />
                                </div>
                        </div>
                        <div className='container-play' > 
                            <div className='play-selected-back'>
                                <h2>PLAYER 1 PLAY</h2>
                                {player1Play !== null && player2Play === null  ? <img src={mistery} alt='' /> :  <PlaySelected image={player1Play}  />}
                            </div>
                        </div>
                    </div>
                    <div className='mid-container'>
                        <div className='score'>
                            <h3 >SCORE</h3>
                            <h3 >{player1Score}-{player2Score}</h3>
                        </div>
                        <div className='text-alert'>
                            {player1Play !==null && player2Play!==null ? "" : (player1Play ===null ? <YourTurnText stringPlayer={"1"} /> :<YourTurnText stringPlayer={"2"} />)}
                            {player1Play !==null && player2Play!==null ? "" : (player1Play ===null ? <BlindText stringPlayer={"2"} /> :<BlindText stringPlayer={"1"} />)}
                        </div>
                        <button className='btn-pa' onClick={() => resetValues()}>PLAY AGAIN</button>
                        <h3 className='winner'>{result}</h3>
                    </div>
                        <div className='rivalOptions'>
                            <div className='container-play' > 
                                <div className= 'play-selected'>
                                    <h2>PLAYER 2 PLAY</h2>
                                    <PlaySelected image={player2Play}  />
                                </div>
                            </div>
                            <div className='b'>
                                <h1>Player 2</h1>
                                <div className='images'style={{  
                                                    pointerEvents: player1Play != null && player2Play == null ? 'auto' : 'none',
                                                            }}>
                                    <img src={lizard} alt="lizard" onClick={() => {playAHand("lizard", false)}} />
                                    <img src={paper} alt="paper" onClick={() => {playAHand("paper", false)}} />
                                    <img src={rock} alt="rock" onClick={() => {playAHand("rock",false)}}/>
                                    <img src={scissors} alt="scissors" onClick={() => {playAHand("scissors",false)}} />
                                    <img src={spock} alt="spock" onClick={() => {playAHand("spock",false )}} />
                          
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
}

export default MultiplayerMode;