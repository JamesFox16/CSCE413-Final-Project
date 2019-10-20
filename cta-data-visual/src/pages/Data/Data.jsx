import React, { Component } from 'react';
import BoardingTotalTable from '../../components/BoardingTotalTable';
import DailyEntriesRailTable from '../../components/DailyEntriesRailTable';
import LStopTable from '../../components/LStropTable';
import MonthlyEntriesRailTable from '../../components/MonthlyEntriesRailTable';

export default class Data extends Component {
  render() {
    return (
      <>
        <BoardingTotalTable />
        <DailyEntriesRailTable />
        <LStopTable />
        <MonthlyEntriesRailTable />
      </>
    );
  }
}
