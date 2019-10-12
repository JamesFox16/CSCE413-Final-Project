import React from 'react';
import './App.css';
import MainAppBar from './component/MainAppBar';
import LeafletMap from './component/LeafletMap';

function App() {
    return (
        <div className="App">
            <MainAppBar />
            <LeafletMap />
        </div>
    );
}

export default App;
