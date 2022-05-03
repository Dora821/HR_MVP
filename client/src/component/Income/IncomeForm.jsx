import React, {useState, useContext} from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import {TrackerContext} from '../Context/Context.js';


const useStyles = makeStyles({
  button: {
    border: '1px'
  }
})

const IncomeForm=({addIncomeTransaction})=>{
  const classes = useStyles();
  let initialState = {
    amount: '',
    category: '',
    payer: '',
    date: new Date()
  };

  const [entry, setEntry] = useState(initialState);

  // const usedContext = useContext(TrackerContext)
  console.log('addTransaction', addIncomeTransaction);

  const categories = []

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <TextField value={entry.date} onChange={(e)=>setEntry({...entry, date: e.target.value})} InputLabelProps={{ shrink: true }} type='date' label='Date' fullWidth/>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <TextField value={entry.payer} onChange={(e)=>setEntry({...entry, payer: e.target.value})} InputLabelProps={{ shrink: true }} type='string' label='Payer' fullWidth/>
      </Grid>
      <Grid item xs={3}>
       <FormControl fullWidth>
        <TextField fullWidth value={entry.category} onChange={(e)=>setEntry({...entry,category: e.target.value})} displayEmpty InputLabelProps={{ shrink: true }} label='Category' select >
            <MenuItem value='' disabled >Empty</MenuItem>
            <MenuItem value={'Salary'}>Salary</MenuItem>
            <MenuItem value={'Stock'}>Stock</MenuItem>
            <MenuItem value={'Rental'}>Rental</MenuItem>
            <MenuItem value={'Other'}>Other</MenuItem>
        </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
          <TextField value={entry.amount} onChange={(e)=>setEntry({...entry, amount: e.target.value})} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} type='number' label='Amount' fullWidth/>
      </Grid>
      <Grid item xs={1}>
        <Button style={{
          marginTop: '10px',
          maxWidth: "40px",
          maxHeight: "35px",
          minWidth: "40px",
          minHeight: "35px"
        }} color='D85f5f' type='secondary' variant={'contained'} onClick={()=>{addIncomeTransaction(entry); setEntry(initialState)}}>Add</Button>
      </Grid>
    </Grid>
  )
}

export default IncomeForm;