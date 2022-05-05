import React, {useState, useContext} from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import {TrackerContext} from '../Context/Context.js';
import formatDate from '../../utils/formatDate.js';

const useStyles = makeStyles({
  button: {
    border: '1px'
  }
})

const ExpenseForm=({addExpenseTransaction})=>{
  const classes = useStyles();
  let initialState = {
    Amount: '',
    Category: '',
    Vendor: '',
    TransactionDate: formatDate(new Date()),
  };

  const [entry, setEntry] = useState(initialState);

  // const usedContext = useContext(TrackerContext)
  console.log('addTransaction', addExpenseTransaction);

  console.log('entry', entry);

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <TextField value={entry.TransactionDate} onChange={(e)=>setEntry({...entry, TransactionDate: formatDate(e.target.value)})} InputLabelProps={{ shrink: true }} type='date' label='Date' fullWidth/>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <TextField value={entry.Vendor} onChange={(e)=>setEntry({...entry, Vendor: e.target.value})} InputLabelProps={{ shrink: true }} type='string' label='vendor' fullWidth/>
      </Grid>
      <Grid item xs={3}>
       <FormControl fullWidth>
        <TextField fullWidth value={entry.Category} onChange={(e)=>setEntry({...entry,Category: e.target.value})} displayEmpty InputLabelProps={{ shrink: true }} label='Category' select >
            <MenuItem value='' disabled >Empty</MenuItem>
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
        </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
          <TextField value={entry.Amount} onChange={(e)=>setEntry({...entry, Amount: e.target.value})} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} type='number' label='Amount' fullWidth/>
      </Grid>
      <Grid item xs={1}>
        <Button style={{
          marginTop: '10px',
          maxWidth: "40px",
          maxHeight: "35px",
          minWidth: "40px",
          minHeight: "35px"
        }} color='D85f5f' type='secondary' variant={'contained'} onClick={()=>{
          if (entry.Amount && entry.TransactionDate && entry.Vendor && entry.Category) {
            addExpenseTransaction(entry);
            setEntry(initialState);
          } else {
            alert('Please Fill In All The Field')
          }
          }}>Add</Button>
      </Grid>
    </Grid>
  )
}

export default ExpenseForm;