import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
  Container: {
    backgroundColor: 'black',
    display: 'flex'
  },
  Child: {
    flex: '1',
    width: '50vw'
  }
})

export default function SearchBar({setDetails, allExpense}) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');
  const [searchKey, setSearchKey] = React.useState('');

  const handleFilterChange = (event) => {
    console.log('event in search bar', event.target.value);
    setFilter(event.target.value);
    if (event.target.value !== 'None' || '') {
      console.log('setDetails is working');
      console.log(allExpense.filter((each=> each.Category === event.target.value)));
      setDetails(allExpense.filter((each=> each.Category === event.target.value)))
    } else {
      setDetails(allExpense);
    }
  };

  return (
    <Box style={{backgroundColor: 'transparent', display: 'flex' }} sx={{ minWidth: 120 }}>
      <FormControl style={{flex: '1', minWidth: '50vw', justifyContent: 'center'}}>
        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value={'None'}>None</MenuItem>
          <MenuItem value={'Grocery'}>Grocery</MenuItem>
          <MenuItem value={'Food'}>Food</MenuItem>
          <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
          <MenuItem value={'Shopping'}>Shopping</MenuItem>
          <MenuItem value='House' >House</MenuItem>
          <MenuItem value={'Utilities'}>Utilities</MenuItem>
          <MenuItem value={'Cars'}>Car</MenuItem>
          <MenuItem value={'Kids'}>Kids</MenuItem>
          <MenuItem value={'Travel'}>Travel</MenuItem>
          <MenuItem value={'Health'}>Health</MenuItem>
        </Select>
      </FormControl>
      <Paper tyle={{flex: '1', minWidth: '50vw', flexGrow: '1', order: '1', justifyContent: 'center'}}
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        </IconButton>
      </Paper>
    </Box>
  );
}
