import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HowToPlay from './Components/HowToPlay';
import Game from './Components/Game';
import MultiplayerMode from './Components/MultiplayerMode';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Navbar />
        <HowToPlay />
        <Routes>
          <Route exact path = "/" element={<Game />} />
          <Route exact path = "/multiplayer" element={<MultiplayerMode />} />
        </Routes>
        <Footer />
    </div> 
    </BrowserRouter>
  );
}

export default App;
