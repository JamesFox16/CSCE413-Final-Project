import React, { Component } from 'react';
import AvgWDRidersStationChart from '../../../components/AvgWDRidersStationChart';
import StationDropdown from '../../../components/StationDropdown';

export default class Avgwdriders extends Component {
  render() {
    return (
      <>
        <StationDropdown />
        <AvgWDRidersStationChart />
      </>
    );
  }
}
