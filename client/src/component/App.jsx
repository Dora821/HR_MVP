import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import HomeExpense from './Expense/Home.jsx';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Provider from './Context/Context.js';
import 'regenerator-runtime/runtime';
const axios = require('axios');
import Details from './Expense/Details.jsx';
import NavBar from './NavBar.jsx';
import Summary from './Summary.jsx';

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
    display: 'flex',
    flexDirection: 'column',
    // gridTemplateColumns: '1fr 1fr',
    // gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridGap: "10px",
  },
  HeaderStyle: {
    flex: '1',
  },

  SummaryStyle: {
    // gridRow: '2 / 2',
    // gridColumn: '1 / -1'
    flex: '1',
    margin: '0',
    flexBasis: '25%',
  },

  HomeStyle: {
    flex: '1',
    flexBasis: '35%',
    height: '70vh',

  },
  DetailsStyle: {
    flex: '1',
    flexBasis:'35%',
    height: '35vh',
  },
});

const App = ()=>{
  const classes = useStyles();
  const [allExpense, setAllExpense] = useState([]);

  useEffect(()=>{
    setAllExpense(allExpense)
  }, [allExpense])

  useEffect(()=>{
    const fectchData = async() =>{
      const allExpenseData = await axios.get('/fire/expense');
      console.log('all epense in useeffect when date being added', allExpenseData);
      setAllExpense(allExpenseData.data);
      }

      fectchData();
  }, [])

  const addExpenseTransaction = (obj) => {
    console.log('adding expense in app', obj)
    axios.post('/fire/expense', obj)
      .then(result => {
        console.log('post post expense', result);
        let transactions = result.data;
        setAllExpense(transactions);
      })
      .catch(error=>console.log('error occurred when adding expense', error))
  }
  console.log('allxpense in app,', allExpense)
  return (
      <Box className={classes.container}>
        <Box className={classes.headerStyle}>
          <NavBar></NavBar>
        </Box>
        <Box style={{height: '200px'}} className={classes.SummaryStyle}>
          {allExpense.length === 0 ? <p>'Loading'</p> : <Summary allExpense={allExpense}/>}
        </Box>
        <Box className={classes.HomeStyle}>
          {allExpense.length === 0 ? <p>'Loading'</p> : <HomeExpense allExpense={allExpense} addExpense={addExpenseTransaction}/>}
        </Box>
        <Box className={classes.DetailsStyle} >
          {allExpense.length === 0 ? <p>'Loading'</p> : <Details allExpense={allExpense} addExpense={addExpenseTransaction}/>}
        </Box>
      </Box>
  )

};


export default App;

