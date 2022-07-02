import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import HowToPlay from './Components/HowToPlay';
import Game from './Components/Game';
import MultiplayerMode from './Components/MultiplayerMode';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Banner />
        <HowToPlay />
        <Routes>
          <Route exact path = "/" element={<Game />} />
          <Route exact path = "/multiplayer" element={<MultiplayerMode />} />
        </Routes>
    </div> 
    </BrowserRouter>
  );
}

export default App;
