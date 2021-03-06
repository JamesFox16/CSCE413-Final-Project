import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const style = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
};

export default class MonthlyEntriesRailTable extends Component {
  render() {
    return (
      <Paper className={style.root}>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <TableCell>Station ID</TableCell>
              <TableCell>Station Name</TableCell>
              <TableCell>Month Begin</TableCell>
              <TableCell>Average Weekly Riders</TableCell>
              <TableCell>Average Saturday Riders</TableCell>
              <TableCell>Average Sunday Holiday Riders</TableCell>
              <TableCell>Month Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </Paper>
    );
  }
}
