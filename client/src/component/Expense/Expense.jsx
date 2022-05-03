import {Grid, Divider} from '@material-ui/core';
import ExpenseForm from './ExpenseForm.jsx';
import ExpenseTracker from './ExpenseTracker.jsx';
import ExpenseDes from './ExpenseDes.jsx';
import React, {useState, useContext} from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  formStyle: {
    backgroundColor: 'balck'
  },
  trackerStyle: {
    backgroundColor: 'purpule'
  }
})

const Expense = ({addExpense, allExpense}) => {
  console.log('expense category imported', {addExpense, allExpense});
  const classes = useStyles();

  // const [allIncomeByCategory, setAllIncomeByCategory]

  const reducer = (obj, category) => {
    console.log('obj in the obj', obj);
    if (obj.length > 0) {
      let curArray = obj.filter((each)=>each.Category === category).map(each=>each.Amount);
      console.log('curArray being added', curArray);
      if (curArray.length > 0) {
        console.log('curArray', curArray);
        // console.log('reduce amount', curArray.reduce((a, b)=> Number(a)+ Number(b));
        return curArray.reduce((a, b)=>Number(a)+ Number(b)).toFixed(2);
      }
    } else {
      return 0;
    }
  }
  const expenseByCategory = [
    {Grocery: reducer(allExpense, 'Grocery')},
    {Food: reducer(allExpense, 'Food')},
    {Entertainment: reducer(allExpense, 'Entertainment')},
    {Shopping: reducer(allExpense, 'Shopping')},
    {House: reducer(allExpense, 'House')},
    {Utilities: reducer(allExpense, 'Utilities')},
    {Cars: reducer(allExpense, 'Car')},
    {Kids: reducer(allExpense, 'Kids')},
    {Travel: reducer(allExpense, 'Travel')},
    {Health: reducer(allExpense, 'Health')}
  ]

  console.log('income by Catrgory', expenseByCategory);
  return (
    <Grid container spaing={1} >
      <Grid xs={12}>
        <ExpenseForm addExpenseTransaction={addExpense} />
      </Grid>
      <Grid style={{ margin:'auto'}} item xs={6}>
        <ExpenseDes category={expenseByCategory}/>
      </Grid>
      <Grid item xs={6}>
        <ExpenseTracker allExpense={expenseByCategory} />
      </Grid>
    </Grid>
  )
}

export default Expense;