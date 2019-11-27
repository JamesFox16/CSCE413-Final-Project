import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import CardTile from './components/CardTile';
import CardGroup from 'react-bootstrap/CardGroup';
import DailyRidersByStationChart from './components/DailyRidersByStationChart';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <CardGroup style={{ padding: 15 }}>
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={'lorem ipsum sit dolor'}
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={'lorem ipsum sit dolor'}
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={'lorem ipsum sit dolor'}
        />
      </CardGroup>
      <CardGroup style={{ padding: 15 }}>
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={'lorem ipsum sit dolor'}
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={'lorem ipsum sit dolor'}
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={'lorem ipsum sit dolor'}
        />
      </CardGroup>
      <DailyRidersByStationChart />
    </div>
  );
}

export default App;
