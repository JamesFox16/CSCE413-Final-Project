import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

const style = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
};

export default class BoardingTotalTable extends Component {
  render() {
    return (
      <Paper className={style.root}>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <TableCell>Ride ID</TableCell>
              <TableCell>Service Date</TableCell>
              <TableCell>Day Type</TableCell>
              <TableCell>Bus Total</TableCell>
              <TableCell>Rail Total</TableCell>
              <TableCell>Total Rides</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </Paper>
    );
  }
}
