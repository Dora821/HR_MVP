import React from 'react';
import Income from './Income.jsx';
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
    backgroundColor:'purple',
    flexBasis: '20%',
    // height: '15vh',
    // width: '100vw',
  },
  incomeEntry: {
    backgroundColor:'#C4C4C4',
    flexBasis: '50%',
    borderRadius: '2%',
  },
  expenseEntry: {
    backgroundColor:'#C4C4C4',
    flexBasis: '35%',
    borderRadius: '2%',
  },
  // savingEntry: {
  //   backgroundColor:'#C4C4C4',
  //   flexBasis: '13%',
  // }
})

const HomeIncome =({allIncome, addIncome}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container} >
       <Box className={classes.title} >
        Life on Fire
      </Box>
      <Box className={classes.incomeEntry} m={1} pt={5}>
        <Income allIncome={allIncome} addIncome={addIncome}/>
      </Box>
      <Box className={classes.expenseEntry} m={1} pt={10}>
        <Details allIncome={allIncome}/>
      </Box>
      {/* <Box className={classes.savingEntry}>
        <Savings />
      </Box> */}
    </Box>
  )
};
export default HomeIncome;
