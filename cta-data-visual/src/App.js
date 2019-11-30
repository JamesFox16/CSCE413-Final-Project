import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import CardTile from './components/CardTile';
import CardGroup from 'react-bootstrap/CardGroup';
import MonthlyRidersTotalStationChart from './components/MonthlyRidersTotalStationChart';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <CardGroup style={{ padding: 15 }}>
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
      </CardGroup>
      <CardGroup style={{ padding: 15 }}>
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <CardTile
          style={{ padding: 15 }}
          cardTitle={'Test'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
      </CardGroup>
      <MonthlyRidersTotalStationChart />
    </div>
  );
}

export default App;
