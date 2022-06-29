import React from 'react'
import { useState } from 'react'
import lizard from '../Media/lizard.svg';
import paper from '../Media/paper.svg';
import rock from '../Media/rock.svg';
import scissors from '../Media/scissors.svg';
import spock from '../Media/spock.svg';
import './Game.css';
import { renderToStaticMarkup } from 'react-dom/server';


export default function Game() {

    const imagesP= 
        {
            "rock" : lizard
        }

       
    

    const plays= ["lizard", "paper", "rock", "scissors", "spock" ];
    const [player1Play, setplayer1Play] = useState("");
    const [comPlay, setComPlay] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameMode, setGameMode] = useState("");

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
        else{
            return "tie"
        }
    }

    const checkPlay= (p1, p2) => {

        if (checkHands(p1,p2) === p1){
            return "YOU WIN";
        }
        else if(checkHands(p1,p2) === p2){
            return "YOU LOSE"
        }
        else {
            return "TIE";
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
                        <img src={lizard} alt="lizard" onClick={() => {setplayer1Play("lizard")}} />
                        <img src={paper} alt="lizard" onClick={() => {setplayer1Play("paper")}}/>
                        <img src={rock} alt="lizard" onClick={() => {setplayer1Play("rock")}}/>
                        <img src={scissors} alt="lizard" onClick={() => {setplayer1Play("scissors")}}/>
                        <img src={spock} alt="lizard" onClick={() => {setplayer1Play("spock")}}/>
                    </div>
                    
                    </div>
                    <PlaySelected image={player1Play} />
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
                <div onClick={() => {setComPlay(plays[Math.floor(Math.random() * 5)]); console.log(setplayer1Play, comPlay); checkPlay(player1Play, comPlay)} }>
                PLAY
            </div>
            <div>
                <h3>YOUR PLAY: {player1Play}</h3>
                <h3>COM PLAY: {comPlay}</h3>
                
                <h3>{checkPlay(player1Play, comPlay)}</h3>

            </div>
            </div>
           
            


    </div>
  )
}
