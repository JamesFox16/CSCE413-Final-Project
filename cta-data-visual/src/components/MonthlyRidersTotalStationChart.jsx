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
            tickLabelAngle={-90}
            orientation="bottom"
          />
          <YAxis attr="y" attrAxis="x" orientation="left" title="Riders" />
          <LineSeries color="#3895D3" data={this.state.items} />
        </XYPlot>
      </div>
    );
  }
}
