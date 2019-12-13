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
      'http://localhost:3005/api/data/derail/station/' + this.props.stationId
    )
      .then(results => results.json())
      .then(
        data => {
          let itemMap = data.map(d => {
            return { x: new Date(d.date).toLocaleDateString(), y: d.rides };
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
        'http://localhost:3005/api/data/derail/station/' + this.props.stationId
      )
        .then(results => results.json())
        .then(
          data => {
            let itemMap = data.map(d => {
              return { x: new Date(d.date).toLocaleDateString(), y: d.rides };
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
    return (
      <div style={{ padding: 15 }}>
        <XYPlot
          xType="ordinal"
          margin={{ right: 40 }}
          height={900}
          width={1600}
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis
            attr="x"
            attrAxis="y"
            orientation="bottom"
            title="Date"
            tickLabelAngle={-45}
            tickFormat={(t, i) => {
              if ((i + 1) % 365 === 0) {
                return t.split(',')[0];
              } else {
                return;
              }
            }}
            orientation="bottom"
          />
          <YAxis attr="y" attrAxis="x" orientation="left" title="Riders" />
          <LineSeries color="#3895D3" data={this.state.items} />
        </XYPlot>
      </div>
    );
  }
}
