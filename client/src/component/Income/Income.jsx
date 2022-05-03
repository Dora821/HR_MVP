import {Grid, Divider} from '@material-ui/core';
import IncomeForm from './IncomeForm.jsx';
import Tracker from './IncomeTracker.jsx';
import IncomeDes from './IncomeDes.jsx';
import React, {useState, useContext} from 'react';
import {TrackerContext} from '../Context/Context.js';
import {incomeCategories} from '../../utils/category.js';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  formStyle: {
    backgroundColor: 'balck'
  },
  trackerStyle: {
    backgroundColor: 'purpule'
  }
})

const Income = ({allIncome, addIncome}) => {
  console.log('income category imported', {allIncome, addIncome});
  const classes = useStyles();

  // const [allIncomeByCategory, setAllIncomeByCategory]

  const reducer = (obj, category) => {
    if (obj.length > 0) {
      let curArray = obj.filter((each)=>each.category === category).map((each)=>each.amount);
      if (curArray.length > 0) {
        console.log('curArray', curArray);
        console.log('reduce amount', curArray.reduce((a, b)=>a+b))
        return curArray.reduce((a, b)=>a+b);
      }
    } else {
      return 0;
    }
  }
  const incomeByCategroy = [
    {Rental: reducer(allIncome, 'Rental')},
    {Salary: reducer(allIncome, 'Salary')},
    {Stock: reducer(allIncome, 'Stock')},
    {Other: reducer(allIncome, 'Other')}
  ]

  console.log('income by Catrgory', incomeByCategroy);
  return (
    <Grid container spaing={1} >
      <Grid xs={12}>
        <IncomeForm addIncomeTransaction={addIncome} />
      </Grid>
      <Grid style={{ margin:'auto'}} item xs={6}>
        <IncomeDes category={incomeByCategroy}/>
      </Grid>
      <Grid item xs={6}>
        <Tracker allIncome={incomeByCategroy} />
      </Grid>
    </Grid>
  )
}

export default Income;