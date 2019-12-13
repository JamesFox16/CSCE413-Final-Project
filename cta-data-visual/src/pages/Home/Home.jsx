import React, { Component } from 'react';
import CardTile from '../../components/CardTile';
import CardGroup from 'react-bootstrap/CardGroup';

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
        </CardGroup>
        <CardGroup style={{ padding: 15 }}>
          <CardTile
            style={{ padding: 15 }}
            cardTitle={'Test'}
            cardText={'Monthly Riders by station line chart'}
            link="/monthridersstation"
          />
          <CardTile
            style={{ padding: 15 }}
            cardTitle={'Test'}
            cardText={'Total riders for data collection lifetime'}
            link="/totalriders"
          />
          <CardTile
            style={{ padding: 15 }}
            cardTitle={'Test'}
            cardText={'Daily riders by station line chart'}
            link="/dailyriders"
          />
        </CardGroup>
      </>
    );
  }
}
