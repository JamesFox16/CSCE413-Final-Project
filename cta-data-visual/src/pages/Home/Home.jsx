import React, { Component } from 'react';
import CardTile from '../../components/CardTile'
import CardGroup from 'react-bootstrap/CardGroup';
import MonthlyRidersTotalStationChart from '../../components/MonthlyRidersTotalStationChart';
import StationDropdown from '../../components/StationDropdown';

export default class Home extends Component {
  render() {
    return (
      <>
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
        <StationDropdown />
        <MonthlyRidersTotalStationChart />
      </>
    );
  }
}
