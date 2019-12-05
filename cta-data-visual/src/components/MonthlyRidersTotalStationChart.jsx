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

export default class MonthlyRidersTotalStationChart extends Component {
  constructor() {
    super();
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
      .then(results => results.json())
      .then(
        data => {
          let itemMap = data.map(d => {
            return {
              x: new Date(d.month_beginning).toLocaleDateString(),
              y: d.monthtotal
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
            error: error
          });
        }
      );
  };

  componentDidUpdate = prevProps => {
    if (prevProps.stationId !== this.props.stationId) {
      fetch(
        'http://localhost:3005/api/data/merail/station/' + this.props.stationId
      )
        .then(results => results.json())
        .then(
          data => {
            let itemMap = data.map(d => {
              return {
                x: new Date(d.month_beginning).toLocaleDateString(),
                y: d.monthtotal
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
              error: error
            });
          }
        );
    }
  };

  render() {
    return !this.state.isLoaded ? (
      <div></div>
    ) : (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <XYPlot
          xType="ordinal"
          height={750}
          width={1500}
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis
            title="Date"
            tickLabelAngle={-90}
            orientation="bottom"
            height={300}
          />
          <YAxis
            title="Riders"
            width={100}
            left={-50}
            tickPadding={0}
          />
          <LineSeries
            color="#3895D3"
            data={this.state.items}
            animation="true"
          />
        </XYPlot>
      </div>
    );
  }
}
