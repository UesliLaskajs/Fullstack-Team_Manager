import PlayerList from './components/Playerlist';
import SectionManage from './components/SectionManage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerCreation from './components/PlayerCreation';
import Gamestatus from './components/Gamestatus';
import Gamestatus2 from './components/Gamestatus2';
import Gamestatus3 from './components/Gamestatus3';
function App() {
  return (
    <BrowserRouter>
    <SectionManage/>
      <Routes>
        <Route path='/players/list' element={<PlayerList />} />
        <Route path='/players/addplayer' element={<PlayerCreation/>}/>
        <Route path='/status/game/1' element={<Gamestatus/>}/>
        <Route path='/status/game/2' element={<Gamestatus2/>}/>
        <Route path='/status/game/3' element={<Gamestatus3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
