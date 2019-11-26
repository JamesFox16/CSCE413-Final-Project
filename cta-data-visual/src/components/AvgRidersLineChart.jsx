import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines
} from 'react-vis';

export default class AvgRidersLineChart extends Component {
  render() {
    return (
      <>
        <XYPlot xType="ordinal" height={500} width={1000}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Date" />
          <YAxis title="Average Riders" />
        </XYPlot>
      </>
    );
  }
}
