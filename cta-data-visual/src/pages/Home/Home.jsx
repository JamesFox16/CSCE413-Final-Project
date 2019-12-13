import React, { Component } from 'react';
import CardTile from '../../components/CardTile';
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
            cardText={'Average Weekday Riders line chart'}
            link="/avgwdriders"
          />
          <CardTile
            style={{ padding: 15 }}
            cardTitle={'Test'}
            cardText={'Average Weekend Sunday Holiday Riders line chart'}
            link="/Avgweshriders"
          />
          <CardTile
            style={{ padding: 15 }}
            cardTitle={'Test'}
            cardText={'Average Weekend Saturday Riders line chart'}
            link="/Avgwesriders"
          />
          <CardTile
            style={{ padding: 15 }}
            cardTitle={'Test'}
            cardText={'Monthly Riders by station line chart'}
            link="/monthridersstation"
          />
        </CardGroup>
      </>
    );
  }
}
