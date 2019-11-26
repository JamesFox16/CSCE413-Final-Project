import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines
} from 'react-vis';

export default class AvgTotalRidersChart extends Component {
  render() {
    return (
      <>
        <XYPlot xType="original" height={500} width={1000}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Date Month" />
          <YAxis title="Average Total Riders" />
        </XYPlot>
      </>
    );
  }
}
