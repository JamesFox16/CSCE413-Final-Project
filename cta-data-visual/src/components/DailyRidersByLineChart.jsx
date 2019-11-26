import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

export default class DailyRidersByLineChart extends Component {
  render() {
    return (
      <>
        <XYPlot xType="ordinal" height={500} width={1000}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Date" />
          <YAxis title="Number of Riders" />
        </XYPlot>
      </>
    );
  }
}
