import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines
} from 'react-vis';
import 'react-vis/dist/style.css';

export default class AvgTotalRidersChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount = () => {
    fetch('https://localhost:3000/api/data/boardingtotal')
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
      <>
        <XYPlot xType="ordinal" height={500} width={1000}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Date Month" />
          <YAxis title="Average Total Riders" />
        </XYPlot>
      </>
    );
  }
}
