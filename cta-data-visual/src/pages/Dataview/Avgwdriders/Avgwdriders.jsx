import React, { Component } from 'react';
import AvgWDRidersStationChart from '../../../components/AvgWDRidersStationChart';
import StationDropdown from '../../../components/StationDropdown';

export default class Avgwdriders extends Component {
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
        <AvgWDRidersStationChart stationId={this.state.stationId} />
      </>
    );
  }
}
