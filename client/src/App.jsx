import  { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import PlayerList from './components/Playerlist';
import SectionManage from './components/SectionManage';
import PlayerCreation from './components/PlayerCreation';
import Gamestatus from './components/Gamestatus';
import Gamestatus2 from './components/Gamestatus2';
import Gamestatus3 from './components/Gamestatus3';

function App() {
  const [socket] = useState(() => io('http://0.0.0.0:8000'));
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [gameStatus, setGameStatus] = useState('');

  useEffect(() => {
    // Listen for "Welcome" event from the server
    socket.on('Welcome', (data) => {
      setWelcomeMessage(data);
    });

    // Listen for "GameStatus" event from the server
    socket.on('GameStatus', (status) => {
      setGameStatus(status);
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.disconnect();
    };
  }, [socket]);

  return (
    <BrowserRouter>
      <SectionManage />
      <Routes>
        <Route path="/players/list" element={<PlayerList />} />
        <Route path="/players/addplayer" element={<PlayerCreation />} />
        <Route path="/status/game/1" element={<Gamestatus />} />
        <Route path="/status/game/2" element={<Gamestatus2 />} />
        <Route path="/status/game/3" element={<Gamestatus3 />} />
      </Routes>
      <div>
        <p>Welcome Message: {welcomeMessage}</p>
        <p>Game Status: {gameStatus}</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
