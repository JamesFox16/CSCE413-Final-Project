import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

export default class LStopTable extends Component {
  render() {
    return (
      <Paper className={style.root}>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <TableCell>Stop ID</TableCell>
              <TableCell>Direction ID</TableCell>
              <TableCell>Stop Name</TableCell>
              <TableCell>Station Name</TableCell>
              <TableCell>Station Descriptive</TableCell>
              <TableCell>Map ID</TableCell>
              <TableCell>ADA</TableCell>
              <TableCell>Red</TableCell>
              <TableCell>Blue</TableCell>
              <TableCell>Green</TableCell>
              <TableCell>Brown</TableCell>
              <TableCell>Purple</TableCell>
              <TableCell>Purple Express</TableCell>
              <TableCell>Yellow</TableCell>
              <TableCell>Pink</TableCell>
              <TableCell>Orange</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Zip Codes</TableCell>
              <TableCell>Historical Wards</TableCell>
              <TableCell>Community Areas</TableCell>
              <TableCell>Census Tracts</TableCell>
              <TableCell>Wards</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </Paper>
    );
  }
}
