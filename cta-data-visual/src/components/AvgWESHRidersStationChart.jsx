import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';
import 'react-vis/dist/style.css';

export default class AvgWESHRidersStationChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount = () => {
    fetch(
      'http://localhost:3005/api/data/merail/station/' + this.props.stationId
    )
      .then(res => res.json())
      .then(
        data => {
          let itemMap = data.map(d => {
            return {
              x: new Date(d.month_beginning).toLocaleDateString(),
              y: d.avg_sunday_holiday_rides
            };
          });
          this.setState({
            isLoaded: true,
            items: itemMap
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

  componentDidUpdate = prevProps => {
    if (prevProps.stationId !== this.props.stationId) {
      fetch(
        'http://localhost:3005/api/data/merail/station/' + this.props.stationId
      )
        .then(res => res.json())
        .then(
          data => {
            let itemMap = data.map(d => {
              return {
                x: new Date(d.month_beginning).toLocaleDateString(),
                y: d.avg_sunday_holiday_rides
              };
            });
            this.setState({
              isLoaded: true,
              items: itemMap
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <XYPlot xType="ordinal" height={750} width={1500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Date Month" />
          <YAxis
            title="Average Total Riders"
            width={100}
            left={-50}
            tickPadding={0}
          />
          <LineSeries
            animation="true"
            color="#3895D3"
            data={this.state.items}
          />
        </XYPlot>
      </div>
    );
  }
}
