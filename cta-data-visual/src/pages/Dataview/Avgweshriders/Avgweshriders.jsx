import React, { Component } from 'react';
import StationDropdown from '../../../components/StationDropdown';
import AvgWESHRidersStationChart from '../../../components/AvgWESHRidersStationChart';

export default class Avgweshriders extends Component {
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
        <AvgWESHRidersStationChart stationId={this.state.stationId} />
      </>
    );
  }
}