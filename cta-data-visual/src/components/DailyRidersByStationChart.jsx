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

const newdata = null;

export default class DailyRidersByStationChart extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3005/api/data/derail/station/40340')
      .then(results => results.json())
      .then(
        data => {
          let itemMap = data.map(d => {
            return { x: d.date, y: d.rides };
          });
          this.setState({
            isLoaded: true,
            items: itemMap
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  };

  render() {
    return !this.state.isLoaded ? (
      <div></div>
    ) : (
      <XYPlot xType="ordinal" height={900} width={1650}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Date" tickLabelAngle={-90} />
        <YAxis title="Riders" />
        <LineSeries color="#3895D3" data={this.state.items} />
      </XYPlot>
    );
  }
}
