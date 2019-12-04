import React, { Component } from 'react';
import StationDropdown from '../../../components/StationDropdown';
import MonthlyRidersTotalStationChart from '../../../components/MonthlyRidersTotalStationChart';

export default class Monthridersstation extends Component {
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
        <MonthlyRidersTotalStationChart stationId={this.state.stationId} />
      </>
    );
  }
}
