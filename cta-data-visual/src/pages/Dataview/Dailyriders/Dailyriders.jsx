import React, { Component } from 'react';
import StationDropdown from '../../../components/StationDropdown';
import DailyRidersByStationChart from '../../../components/DailyRidersByStationChart';

export default class Dailyriders extends Component {
  constructor() {
    super();
    this.state = {
      stationId: 40900
    };
  }

  changeId = stationIdp => {
    this.setState({
      stationId: stationIdp
    });
  };

  render() {
    return (
      <>
        <StationDropdown stationCallback={this.changeId} />
        <DailyRidersByStationChart stationId={this.state.stationId} />
      </>
    );
  }
}