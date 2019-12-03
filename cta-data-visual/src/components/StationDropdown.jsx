import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { tsConstructorType } from '@babel/types';

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

export default function StationDropdown(props) {
  const [id, setId] = React.useState('');

  const handleChange = event => {
    setId(event.target.value);
    sendData(event.target.value);
  };

  const sendData = stationId => {
    props.stationCallback(stationId);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="line-name">Station Name</InputLabel>
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
        <MenuItem value={41300}>Loyola</MenuItem>
        <MenuItem value={40760}>Granville</MenuItem>
        <MenuItem value={40880}>Thorndale</MenuItem>
        <MenuItem value={41380}>Bryn Mawr</MenuItem>
        <MenuItem value={40340}>Berwyn</MenuItem>
        <MenuItem value={41200}>Argyle</MenuItem>
        <MenuItem value={40770}>Lawrence</MenuItem>
        <MenuItem value={40540}>Wilson</MenuItem>
        <MenuItem value={40080}>Sheridan</MenuItem>
        <MenuItem value={41420}>Addison-North Main</MenuItem>
        <MenuItem value={41320}>Belmont-North Main</MenuItem>
        <MenuItem value={41220}>Fullerton</MenuItem>
        <MenuItem value={40650}>North/Clybourn</MenuItem>
        <MenuItem value={40630}>Clark/Division</MenuItem>
        <MenuItem value={41450}>Chicago/State</MenuItem>
        <MenuItem value={40330}>Grand/State</MenuItem>
        <MenuItem value={41660}>Lake/State</MenuItem>
        <MenuItem value={40500}>Washington/State</MenuItem>
        <MenuItem value={41090}>Monroe/State</MenuItem>
        <MenuItem value={40560}>Jackson/State</MenuItem>
        <MenuItem value={41490}>Harrison</MenuItem>
        <MenuItem value={41400}>Roosevelt</MenuItem>
        <MenuItem value={41000}>Cermak-Chinatown</MenuItem>
        <MenuItem value={40190}>Sox-35th-Dan Ryan</MenuItem>
        <MenuItem value={41230}>47th-Dan Ryan</MenuItem>
        <MenuItem value={41170}>Garfield-Dan Ryan</MenuItem>
        <MenuItem value={40910}>63rd-Dan Ryan</MenuItem>
        <MenuItem value={40990}>69th</MenuItem>
        <MenuItem value={40240}>79th</MenuItem>
        <MenuItem value={41430}>87th</MenuItem>
        <MenuItem value={40450}>95th/Dan Ryan</MenuItem>
        <MenuItem value={41050}>Linden</MenuItem>
        <MenuItem value={41250}>Central-Evanston</MenuItem>
        <MenuItem value={40400}>Noyes</MenuItem>
        <MenuItem value={40520}>Foster</MenuItem>
        <MenuItem value={40050}>Davis</MenuItem>
        <MenuItem value={40690}>Dempster</MenuItem>
        <MenuItem value={40270}>Main</MenuItem>
        <MenuItem value={40840}>South Boulevard</MenuItem>
        <MenuItem value={40140}>Skokie</MenuItem>
        <MenuItem value={40890}>O'Hare Airport</MenuItem>
        <MenuItem value={40820}>Rosemont</MenuItem>
        <MenuItem value={40230}>Cumberland</MenuItem>
        <MenuItem value={40750}>Harlem-O'Hare</MenuItem>
        <MenuItem value={41280}>Jefferson Park</MenuItem>
        <MenuItem value={41330}>Montrose-O'Hare</MenuItem>
        <MenuItem value={40550}>Irving Park-O'Hare</MenuItem>
        <MenuItem value={41240}>Addison-O'Hare</MenuItem>
        <MenuItem value={40060}>Belmont-O'Hare</MenuItem>
        <MenuItem value={41020}>Logan Square</MenuItem>
        <MenuItem value={40570}>California/Milwaukee</MenuItem>
        <MenuItem value={40670}>Western/Milwaukee</MenuItem>
        <MenuItem value={40590}>Damen/Milwaukee</MenuItem>
        <MenuItem value={40320}>Division/Milwaukee</MenuItem>
        <MenuItem value={41410}>Chicago/Milwaukee</MenuItem>
        <MenuItem value={40490}>Grand/Milwaukee</MenuItem>
        <MenuItem value={40370}>Washington/Dearborn</MenuItem>
        <MenuItem value={40790}>Monroe/Dearborn</MenuItem>
        <MenuItem value={40070}>Jackson/Dearborn</MenuItem>
        <MenuItem value={41340}>LaSalle</MenuItem>
        <MenuItem value={40430}>Clinton-Forest Park</MenuItem>
        <MenuItem value={40350}>UIC-Halsted</MenuItem>
        <MenuItem value={40470}>Racine</MenuItem>
        <MenuItem value={40810}>Medical Center</MenuItem>
        <MenuItem value={40220}>Western-Forest Park</MenuItem>
        <MenuItem value={40250}>Kedzie-Homan-Forest Park</MenuItem>
        <MenuItem value={40920}>Pulaski-Forest Park</MenuItem>
        <MenuItem value={40970}>Cicero-Forest Park</MenuItem>
        <MenuItem value={40010}>Austin-Forest Park</MenuItem>
        <MenuItem value={40180}>Oak Park-Forest Park</MenuItem>
        <MenuItem value={40980}>Harlem-Forest Park</MenuItem>
        <MenuItem value={40390}>Forest Park</MenuItem>
        <MenuItem value={41030}>Polk</MenuItem>
        <MenuItem value={40830}>18th</MenuItem>
        <MenuItem value={40210}>Damen-Cermak</MenuItem>
        <MenuItem value={40740}>Western-Cermak</MenuItem>
        <MenuItem value={40440}>California-Cermak</MenuItem>
        <MenuItem value={41040}>Kedzie-Cermak</MenuItem>
        <MenuItem value={40780}>Central Park</MenuItem>
        <MenuItem value={40150}>Pulaski-Cermak</MenuItem>
        <MenuItem value={40600}>Kostner</MenuItem>
        <MenuItem value={40420}>Cicero-Cermak</MenuItem>
        <MenuItem value={40580}>54th/Cermak</MenuItem>
        <MenuItem value={40020}>Harlem-Lake</MenuItem>
        <MenuItem value={41350}>Oak Park-Lake</MenuItem>
        <MenuItem value={40610}>Ridgeland</MenuItem>
        <MenuItem value={41260}>Austin-Lake</MenuItem>
        <MenuItem value={40280}>Central-Lake</MenuItem>
        <MenuItem value={40700}>Laramie</MenuItem>
        <MenuItem value={40480}>Cicero-Lake</MenuItem>
        <MenuItem value={40030}>Pulaski-Lake</MenuItem>
        <MenuItem value={41070}>Kedzie-Lake</MenuItem>
        <MenuItem value={41360}>California-Lake</MenuItem>
        <MenuItem value={40170}>Ashland-Lake</MenuItem>
        <MenuItem value={41160}>Clinton-Lake</MenuItem>
        <MenuItem value={41120}>35-Bronzeville-IIT</MenuItem>
        <MenuItem value={40300}>Indiana</MenuItem>
        <MenuItem value={41270}>43rd</MenuItem>
        <MenuItem value={41080}>47th-South Elevated</MenuItem>
        <MenuItem value={40130}>51st</MenuItem>
        <MenuItem value={40510}>Garfield-South Elevated</MenuItem>
        <MenuItem value={41140}>King Drive</MenuItem>
        <MenuItem value={40720}>East 63rd-Cottage Grove</MenuItem>
        <MenuItem value={40940}>Halsted/63rd</MenuItem>
        <MenuItem value={40290}>Ashland/63rd</MenuItem>
        <MenuItem value={41290}>Kimball</MenuItem>
        <MenuItem value={41180}>Kedzie-Brown</MenuItem>
        <MenuItem value={40870}>Francisco</MenuItem>
        <MenuItem value={41010}>Rockwell</MenuItem>
        <MenuItem value={41480}>Western-Brown</MenuItem>
        <MenuItem value={40090}>Damen-Brown</MenuItem>
        <MenuItem value={41500}>Montrose-Brown</MenuItem>
        <MenuItem value={41460}>Irving Park-Brown</MenuItem>
        <MenuItem value={41440}>Addison-Brown</MenuItem>
        <MenuItem value={41310}>Paulina</MenuItem>
        <MenuItem value={40360}>Southport</MenuItem>
        <MenuItem value={41210}>Wellington</MenuItem>
        <MenuItem value={40530}>Diversey</MenuItem>
        <MenuItem value={40660}>Armitage</MenuItem>
        <MenuItem value={40800}>Sedgwick</MenuItem>
        <MenuItem value={40710}>Chicago/Franklin</MenuItem>
        <MenuItem value={40460}>Merchandise Mart</MenuItem>
        <MenuItem value={40930}>Midway Airport</MenuItem>
        <MenuItem value={40960}>Pulaski-Orange</MenuItem>
        <MenuItem value={41150}>Kedzie-Midway</MenuItem>
        <MenuItem value={40310}>Western-Orange</MenuItem>
        <MenuItem value={40120}>35th/Archer</MenuItem>
        <MenuItem value={41060}>Ashland-Orange</MenuItem>
        <MenuItem value={41130}>Halsted-Orange</MenuItem>
        <MenuItem value={40730}>Washington/Wells</MenuItem>
        <MenuItem value={40040}>Quincy/Wells</MenuItem>
        <MenuItem value={40160}>LaSalle/Van Buren</MenuItem>
        <MenuItem value={40850}>Library</MenuItem>
        <MenuItem value={40680}>Adams/Wabash</MenuItem>
        <MenuItem value={40640}>Madison/Wabash</MenuItem>
        <MenuItem value={40200}>Randolph/Wabash</MenuItem>
        <MenuItem value={40260}>State/Lake</MenuItem>
        <MenuItem value={40380}>Clark/Lake</MenuItem>
      </Select>
    </FormControl>
  );
}
