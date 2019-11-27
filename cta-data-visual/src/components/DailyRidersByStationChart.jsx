import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';
import 'react-vis/dist/style.css';

export default class DailyRidersByStationChart extends Component {
  componentDidMount = () => {
    fetch('https://localhost:3000/api/data/deraill')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    return (
      <XYPlot xType="ordinal" height={500} width={1000}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Date" />
        <YAxis title="Riders" />
        <LineSeries
          color="#3895D3"
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 5 },
            { x: 3, y: 15 }
          ]}
        />
      </XYPlot>
    );
  }
}
