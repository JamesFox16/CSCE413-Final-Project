import React, { Component } from 'react';
import Paper, { TableBody } from '@material-ui/core';
import Table from '@material-ui/core';
import TableRow from '@material-ui/core';
import TableHead from '@material-ui/core';
import TableCell from '@material-ui/core';

const style = {};

export default class BoardingTotalTable extends Component {
  render() {
    return (
      <Paper>
        <Table>
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
