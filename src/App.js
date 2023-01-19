import '../src/index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import DPS from './screens/DPS';
import CO from './screens/CO';
import INT from './screens/INT';
import LDR from './screens/LDR';
import RM from './screens/RM';
import FD from './screens/FD';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeScreen />}/>
          <Route path="/fd" element={<FD />}/>
          <Route path="/dps" element={<DPS />}/>
          <Route path="/co" element={<CO />}/>
          <Route path="/int" element={<INT />}/>
          <Route path="/ldr" element={<LDR />}/>
          <Route path="/rm" element={<RM />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
