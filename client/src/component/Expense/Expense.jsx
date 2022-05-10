import {Grid, Divider} from '@material-ui/core';
import ExpenseTracker from './ExpenseTracker.jsx';
import React, {useState, useContext} from 'react';
import Reducer from '../../utils/Reducer.js';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  // formStyle: {
  //   backgroundColor: 'balck'
  // },
  // trackerStyle: {
  //   backgroundColor: 'purpule'
  // }
})

const Expense = ({addExpense, allExpense}) => {
  console.log('expense in Expense', {addExpense, allExpense});
  const classes = useStyles();

  // const [allIncomeByCategory, setAllIncomeByCategory]
  // const expenseByCategory = [
  //   {Grocery: reducer(allExpense, 'Grocery')},
  //   {Food: reducer(allExpense, 'Food')},
  //   {Entertainment: reducer(allExpense, 'Entertainment')},
  //   {Shopping: reducer(allExpense, 'Shopping')},
  //   {House: reducer(allExpense, 'House')},
  //   {Utilities: reducer(allExpense, 'Utilities')},
  //   {Cars: reducer(allExpense, 'Car')},
  //   {Kids: reducer(allExpense, 'Kids')},
  //   {Travel: reducer(allExpense, 'Travel')},
  //   {Health: reducer(allExpense, 'Health')}
  // ]

  const expenseByCategory = {
    id: '1',
    name: ['Grocery', 'Food', 'Entertainment', 'Shopping', 'House', 'Utilities', 'Car', 'Kids', 'Travel', 'Health'],
    data: [Reducer(allExpense, 'Grocery'), Reducer(allExpense, 'Food'), Reducer(allExpense, 'Entertainment'), Reducer(allExpense, 'Shopping'), Reducer(allExpense, 'House'), Reducer(allExpense, 'Utilities'), Reducer(allExpense, 'Car'), Reducer(allExpense, 'Kids'), Reducer(allExpense, 'Travel'), Reducer(allExpense, 'Health')]
  }

  console.log('income by Catrgory', expenseByCategory);
  return (
    <Grid container spaing={1} >
      <Grid item xs={12}>
        <ExpenseTracker allExpense={expenseByCategory} />
      </Grid>
    </Grid>
  )
}

export default Expense;