import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import HomeIncome from './Income/Home.jsx';
import HomeExpense from './Expense/Home.jsx';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Provider from './Context/Context.js';
import 'regenerator-runtime/runtime';
const axios = require('axios');


// const useStyles = makeStyles({
//   root: {
//     height: '900px',
//     width: '1440px',
//     display: 'flex',
//   },
//   HomeStyle: {
//     width: '50vm',
//     height: '100vh',
//     backgroundColor: 'D85F5F'
//   },
//   DetailsStyle: {
//     width: '50vm',
//     height: '100vh',
//     backgroundColor: '673D3D'
//   }
// // })

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: "10px",

  },
  HomeStyle: {
    gridRow: '1 / 3',
    gridColumn: '1 / 2',
  },
  DetailsStyle: {
    gridRow: '1 / 3',
    gridColumn: '2 / 2',
  },
});

const App = ()=>{
  const classes = useStyles();
  const [allIncome, setAllIncome] = useState([]);
  const [allExpense, setAllExpense] = useState([]);

  useEffect(()=>{
    setAllIncome(allIncome)
  }, [allIncome])

  useEffect(()=>{
    setAllExpense(allExpense)
  }, [allExpense])

  useEffect(()=>{
    const fectchData = async() =>{
    const allIncomeData = await axios.get('/fire/income');
    console.log(allIncomeData);
    setAllIncome(allIncomeData.data);
    }

    fectchData();
  }, [])

  useEffect(()=>{
    const fectchData = async() =>{
      const allExpenseData = await axios.get('/fire/expense');
      console.log(allExpenseData);
      setAllExpense(allExpenseData.data);
      }

      fectchData();
  }, [])

  const addIncomeTransaction = (obj) => {
    console.log('adding income in app', obj)
    axios.post('/fire/income', obj)
      .then(result => {
        console.log('post income', result);
        let transactions = result.data;
        setAllIncome(transactions);
      })
      .catch(error=>console.log('error occurred when adding income', error))
  }

  const addExpenseTransaction = (obj) => {
    console.log('adding expense in app', obj)
    axios.post('/fire/expense', obj)
      .then(result => {
        console.log('post income', result);
        let transactions = result.data;
        setAllExpense(transactions);
      })
      .catch(error=>console.log('error occurred when adding income', error))
  }
  console.log('allIncome,', allIncome)
  return (
      <Box className={classes.container}>
        <Box className={classes.HomeStyle} bgcolor="#D7CEC7">
          <HomeIncome allIncome={allIncome} allExpense={allExpense} addIncome={addIncomeTransaction}/>
        </Box>
        <Box className={classes.DetailsStyle} bgcolor="#D7CEC7">
          <HomeExpense allExpense={allExpense} addExpense={addExpenseTransaction}/>
        </Box>

      </Box>
  )

};


export default App;

