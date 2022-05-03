import React from 'react';
import Expense from './Expense.jsx';
import Details from './Details.jsx';
import Savings from './Savings.jsx';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  container:{
    height: '100vh',
    width: '50vw',
    display:'flex',
    flexDirection:'column',
    // gridTemplateRows: '1fr, 2fr, 4fr, 2fr',
    gap: '5px'
  },
  title: {
    backgroundColor:'#C4C4C4',
    flexBasis: '15%',
  },
  incomeEntry: {
    backgroundColor:'#C4C4C4',
    flexBasis: '40%',
    borderRadius: '2%',
    margin: '0',
  },
  expenseEntry: {
    backgroundColor:'#C4C4C4',
    flexBasis: '45%',
    borderRadius: '2%',
  }
})
//   savingEntry: {
//     backgroundColor:'#C4C4C4',
//     flexBasis: '13%',
//   }
// })

const HomeExpense =({allExpense, addExpense}) => {
  console.log('allEpxnese in HomeExpense', allExpense);
  const classes = useStyles();
  return (
    <Box className={classes.container} >
       <Box className={classes.title} >
        Life on Fire
      </Box>
      <Box className={classes.incomeEntry} m={1} pt={5}>
        <Expense allExpense={allExpense} addExpense={addExpense}/>
      </Box>
      <Box className={classes.expenseEntry} m={1} pt={10}>
        <Details allExpense={allExpense}/>
      </Box>
      {/* <Box className={classes.savingEntry}>
        <Savings />
      </Box> */}
    </Box>
  )
};
export default HomeExpense;
