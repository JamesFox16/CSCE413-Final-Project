import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import Avgwdriders from './pages/Dataview/Avgwdriders/Avgwdriders';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <Avgwdriders />
    </div>
  );
}

export default App;
