import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import lizard from '../Media/lizard.svg';
import paper from '../Media/paper.svg';
import rock from '../Media/rock.svg';
import scissors from '../Media/scissors.svg';
import spock from '../Media/spock.svg';
import './Game.css';



export default function Game() {



    const plays= ["lizard", "paper", "rock", "scissors", "spock" ];

    const [player1Play, setPlayer1Play] = useState("");
    const [comPlay, setComPlay] = useState("");
    const [timesPlayed, setTimesPlayed] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);
    const [gameMode, setGameMode] = useState("");

    const [result, setResult] = useState("");
    const [player1Score, setPlayer1Score] =useState(0);
    const [player2Score, setPlayer2Score] =useState(0);

    
    useEffect(() => {
        
          
        if (checkHands(player1Play,comPlay) === player1Play){
            //setResult("YOU WIN");
            //setPlayer1Score(player1Score+ 1);
            setResult("YOU WIN");
            setPlayer1Score(player1Score+1);
        }
        else if (checkHands(player1Play,comPlay) === comPlay){
            //setResult("YOU LOSE");
            //setPlayer2Score(player2Score + 1);
            setResult("YOU LOSE");
            setPlayer2Score(player2Score+1);
            
        }
        else if (checkHands(player1Play,comPlay) === "tie"){
            //setResult("TIE");
            setResult("TIE");
        }
        
      }, [player1Play, comPlay, timesPlayed]);
    



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

    const checkPlay= (p1,p2) => {

       
        if (checkHands(p1,p2) === p1){
            //setResult("YOU WIN");
            //setPlayer1Score(player1Score+ 1);
            return "YOU WIN"
        }
        else if (checkHands(p1,p2) === p2){
            //setResult("YOU LOSE");
            //setPlayer2Score(player2Score + 1);
            return "YOU LOSE"
            
        }
        else if (checkHands(p1,p2) === "tie"){
            //setResult("TIE");
            return "TIE"
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

     

      
  return (
    <div>
            <div>
                <h3 className='vsCom' onClick={() => {setGameMode("com"); setIsPlaying(true);}}>VS COM</h3>
                <h3>VS P2</h3>
            </div>
            <div className='videogame'style={{  
                        display: isPlaying ? 'contents' : 'none',
      }} >
                
                <div className='versus'>
                <div className='yourOptions'>
                    <div className='a'>
                        <h1>Choose your play!</h1>
                        <div className='images'>
                        <img src={lizard} alt="lizard" onClick={() => {checkPlay(); console.log("hika")}} />
                        <img src={paper} alt="lizard" onClick={() => {setPlayer1Play("paper"); setComPlay(plays[Math.floor(Math.random() * 5)]); setTimesPlayed(timesPlayed +1) }} />
                        <img src={rock} alt="lizard" onClick={() => {{setPlayer1Play("rock")}; setComPlay(plays[Math.floor(Math.random() * 5)])}} />
                        <img src={scissors} alt="lizard" onClick={() => {{setPlayer1Play("scissors")}; setComPlay(plays[Math.floor(Math.random() * 5)])}} />
                        <img src={spock} alt="lizard" onClick={() => {{setPlayer1Play("spock")}; setComPlay(plays[Math.floor(Math.random() * 5)])}} />
                    </div>
                    </div>
                    <PlaySelected image={player1Play} />
                </div>
                <div>
                    <h3 className='score'>{player1Score}-{player2Score}</h3>
                    <h3 className='winner'>{result}</h3>
                </div>
                <div className='rivalOptions'>
                <PlaySelected image={comPlay} />
                    <div className='b'>
                    <h1>Choose your play!</h1>
                    <div className='images'>
                    <img src={lizard} alt="lizard"  />
                    <img src={paper} alt="lizard" />
                    <img src={rock} alt="lizard" />
                    <img src={scissors} alt="lizard" />
                    <img src={spock} alt="lizard" />
                    </div>
                    </div>
                </div>
                </div>
                
            <div>
                <h3>YOUR PLAY: {player1Play}</h3>
                <h3>COM PLAY: {comPlay}</h3>
                
                

            </div>
            </div>
           
            


    </div>
  )
}
