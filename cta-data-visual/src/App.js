import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import LeafletMap from './components/LeafletMap';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <LeafletMap />
    </div>
  );
}

export default App;
