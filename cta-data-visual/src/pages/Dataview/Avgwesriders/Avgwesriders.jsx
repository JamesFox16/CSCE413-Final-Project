import React, { Component } from 'react';
import StationDropdown from '../../../components/StationDropdown';
import AvgWESRidersStationChart from '../../../components/AvgWESRidersStationChart';

export default class Avgwesriders extends Component {
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
        <AvgWESRidersStationChart stationId={this.state.stationId} />
      </>
    );
  }
}
