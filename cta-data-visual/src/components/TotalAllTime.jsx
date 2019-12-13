import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis';
import 'react-vis/dist/style.css';

export default class TotalAllTime extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3005/api/data/all/totalrides')
      .then(results => results.json())
      .then(
        data => {
          let itemMap = data.map(d => {
            return { x: d.station_name, y: d.totalr };
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
    return (
      <div>
        <XYPlot
          xType="ordinal"
          margin={{ right: 40 }}
          height={900}
          width={1600}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <VerticalBarSeries
            classname="vertical-bar-series"
            data={this.state.items}
          />
          <XAxis title="Station Name" tickLabelAngle={-90} />
          <YAxis width={100} left={-50} tickPadding={0} title="Total Riders" />
        </XYPlot>
      </div>
    );
  }
}
