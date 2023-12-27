import { Routes, Route } from 'react-router-dom';
import './App.css';
import OpenPage from './pages/OpenPage';
import Add from './pages/Add';
import { useState } from 'react';
import Find from './pages/Find';
import All from './pages/All';

function App() {
  const [allVol, setAllVol] = useState([]);
  const [searchVol, setSearchVol] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<OpenPage />} />
        <Route path='/add' element={<Add setAllVol={setAllVol} allVol={allVol}/>} />
        <Route path='/find' element={<Find setSearchVol={setSearchVol} searchVol={searchVol} allVol={allVol} />} />
        <Route path='/all' element={<All setAllVol={setAllVol} setSearchVol={setSearchVol} searchVol={searchVol} allVol={allVol} />} />

      </Routes>
    </div>
  );
}

export default App;
