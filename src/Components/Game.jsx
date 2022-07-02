import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import lizard from '../Media/lizard.svg';
import paper from '../Media/paper.svg';
import rock from '../Media/rock.svg';
import scissors from '../Media/scissors.svg';
import spock from '../Media/spock.svg';
import mistery from '../Media/mistery.png';
import './Game.css';



export default function Game() {


    //PONER LA JUGADA EN UN RECUADRO ASI EVITO PROBLEMAS DE ESPACIO


    const plays= ["lizard", "paper", "rock", "scissors", "spock" ];

    const [player1Play, setPlayer1Play] = useState(null);
    const [comPlay, setComPlay] = useState(null);
    const [timesPlayed, setTimesPlayed] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);
    const [gameMode, setGameMode] = useState("");

    const [result, setResult] = useState(null);
    const [player1Score, setPlayer1Score] =useState(0);
    const [player2Score, setPlayer2Score] =useState(0);



    
    useEffect(() => {
        
    if (gameMode === "vsCOM")
        if (player1Play !== null || comPlay !== null){
        if (checkHands(player1Play,comPlay) === player1Play){
                setResult("YOU WIN");
            setPlayer1Score(player1Score+1);
        }
        else if (checkHands(player1Play,comPlay) === comPlay){
                  setResult("YOU LOSE");
            setPlayer2Score(player2Score+1);
            
        }
        else if (checkHands(player1Play,comPlay) === "tie"){
                        setResult("TIE");
        }
        else{
            setResult(null)
        }
    }
        
      }, [player1Play, comPlay, timesPlayed]);


      useEffect(() => {
        
        if (gameMode === "vsP2")
            if (checkHands(player1Play,comPlay) === player1Play){
                    setResult("PLAYER 1 WINS!");
                setPlayer1Score(player1Score+1);
            }
            else if (checkHands(player1Play,comPlay) === comPlay){
                      setResult("PLAYER 2 WINS!");
                setPlayer2Score(player2Score+1);
                
            }
            else if (checkHands(player1Play,comPlay) === "tie"){
                            setResult("TIE");
            }
            
          }, [timesPlayed]);
    

    

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

      const handleClick = (value, isPlayer1) => {
        if (isPlayer1){
        setPlayer1Play(value);
        setComPlay(plays[Math.floor(Math.random() * 5)]);
        

      }
      else{
        setComPlay(value);
        
      }
      setTimesPlayed(timesPlayed +1) 
    }
    const handleClickPVP = (value, isPlayer1) => {
        if (isPlayer1){
        setPlayer1Play(value);
                

      }
      else{
        setComPlay(value);
        setTimesPlayed(timesPlayed +1) 
      }
      
    }

const resetValues = () =>{
    setPlayer1Play(null);
    setComPlay(null);
    setResult(null);

}

     
    const againstComputer= () =>{
return(
    <div className='videogame' >
                
                
                <div className='versus'>
                <div className='yourOptions'>
                    <div className='a'>
                        <h1>Player 1</h1>
                        <div className='images' style={{  
            pointerEvents: player1Play != null ? 'none' : 'auto',
        }}>
                        <img src={lizard} alt="lizard" onClick={() => {handleClick("lizard", true)}} />
                        <img src={paper} alt="paper" onClick={() => {handleClick("paper", true)}} />
                        <img src={rock} alt="rock" onClick={() => {handleClick("rock", true)}}/>
                        <img src={scissors} alt="scissors" onClick={() => {handleClick("scissors", true)}} />
                        <img src={spock} alt="spock" onClick={() => {handleClick("spock", true)}} />
                    </div>
                    </div>
                    <div className='container-play' > 
                               <div className= 'play-selected'>
                                    <PlaySelected image={player1Play}  />
                                    <h2>PLAYER 1 PLAY</h2>
                            </div>
                            </div>
                </div>
                <div className='mid-container'>
                    <h3 className='score'>SCORE</h3>
                    <h3 className='score'>{player1Score}-{player2Score}</h3>
                    <button className='btn-pa' onClick={() => resetValues()}>PLAY AGAIN</button>
                    <h3 className='winner'>{result}</h3>
                </div>
                <div className='rivalOptions'>
                <div className='container-play' > 
                               <div className= 'play-selected'>
                                    <PlaySelected image={comPlay}  />
                                    <h2>COM PLAY</h2>
                            </div>
                            </div>
                    <div className='b'>
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
                
            <div>
               
                
                

            </div>
            </div>
)


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


      const againstPlayer2= () =>{
        return(
            <div className='videogame' >
                        
                        
                        <div className='versus'>
                        <div className='yourOptions'>
                            <div className='a'>
                                <h1>Player 1</h1>
                                    <div className='images' style={{  
            pointerEvents: player1Play != null ? 'none' : 'auto',
        }}>
                                <img src={lizard} alt="lizard" onClick={() => {handleClickPVP("lizard", true)}} />
                                <img src={paper} alt="paper" onClick={() => {handleClickPVP("paper", true)}} />
                                <img src={rock} alt="rock" onClick={() => {handleClickPVP("rock", true)}}/>
                                <img src={scissors} alt="scissors" onClick={() => {handleClickPVP("scissors", true)}} />
                                <img src={spock} alt="spock" onClick={() => {handleClickPVP("spock", true)}} />
                            </div>
                            </div>
         
                               <div className='container-play' style={{  
            transform: result !== null ? 'rotateY(180deg)': '',
            transition: result !== null ? 'transform 0.8s' :'',
        }}> 
                                    <div className='container-flip'>
                                    <div className= 'play-selected-front'>
                                        <PlaySelected image={player1Play}  />
                                        <h2>PLAYER 1 PLAY</h2>
                                    </div>
                                    <div className='play-selected-back'>
                                        {player1Play!== null ? <img src={mistery} alt="mistery" /> : null }
                                        <h2>PLAYER 1 PLAY</h2>
                                     </div>
                            </div>
                            </div>
                        </div>
                        <div className='mid-container'>
                            <h3 className='score'>SCORE</h3>
                            <h3 className='score'>{player1Score}-{player2Score}</h3>
                            {player1Play !==null && comPlay!==null ? "" : (player1Play ===null ? <YourTurnText stringPlayer={"1"} /> :<YourTurnText stringPlayer={"2"} />)}
                                {player1Play !==null && comPlay!==null ? "" : (player1Play ===null ? <BlindText stringPlayer={"2"} /> :<BlindText stringPlayer={"1"} />)}
                            <button className='btn-pa' onClick={() => resetValues()}>PLAY AGAIN</button>
                            <h3 className='winner'>{result}</h3>
                        </div>
                        <div className='rivalOptions'>
                        <div className='container-play' > 
                               <div className= 'play-selected'>
                                    <PlaySelected image={comPlay}  />
                                    <h2>COM PLAY</h2>
                                </div>
                        </div>
                            <div className='b'>
                            <h1>Player 2</h1>
                            <div className='images'style={{  
            pointerEvents: player1Play != null && comPlay == null ? 'auto' : 'none',
        }}>
                            <img src={lizard} alt="lizard" onClick={() => {handleClickPVP("lizard", false)}} />
                        <img src={paper} alt="paper" onClick={() => {handleClickPVP("paper", false)}} />
                        <img src={rock} alt="rock" onClick={() => {handleClickPVP("rock",false)}}/>
                        <img src={scissors} alt="scissors" onClick={() => {handleClickPVP("scissors",false)}} />
                        <img src={spock} alt="spock" onClick={() => {handleClickPVP("spock",false )}} />
                          
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    <div>
                       
                        
                        
        
                    </div>
                    </div>
        )
        
              }

     const ActualGame= gameMode === "vsCOM" && isPlaying ? againstComputer : (gameMode === "vsP2" ? againstPlayer2 : "ss")  

      
  return (
    <div>
            <div>
                <h3 className='vsCom' onClick={() => {setGameMode("vsCOM"); setIsPlaying(true);}}>VS COM</h3>
                <h3 onClick={() => {setGameMode("vsP2"); setIsPlaying(true);}}>VS P2</h3>
            </div>
            <ActualGame style={{  
                        display: isPlaying ? 'contents' : 'none',
      }}/>
            
           
            


    </div>
  )
}
