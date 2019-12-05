import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import Avgwesriders from './pages/Dataview/Avgwesriders/Avgwesriders';
import Monthridersstation from './pages/Dataview/Monthridersstation/Monthridersstation';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <Monthridersstation />
    </div>
  );
}

export default App;
