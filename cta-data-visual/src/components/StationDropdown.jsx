import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const classes = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 420
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 420
  }
}));

export default function StationDropdown() {
  const [id, setId] = React.useState('');
  const handleChange = event => {
    setId(event.target.value);
    console.log(id);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="line-name">Line Name</InputLabel>
      <Select
        labelId="line-name"
        id="line-select"
        value={id}
        onChange={handleChange}
        style={{ width: 420 }}
      >
        <MenuItem value={40900}>Howard</MenuItem>
        <MenuItem value={41190}>Jarvis</MenuItem>
        <MenuItem value={40100}>Morse</MenuItem>
        <MenuItem value={41300}>Loyola</MenuItem>
        <MenuItem value={41300}>Granville</MenuItem>
      </Select>
    </FormControl>
  );
}
