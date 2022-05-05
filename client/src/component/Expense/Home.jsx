import React, {useState, useEffect} from 'react';
import Expense from './Expense.jsx';
import Details from './Details.jsx';
import Savings from './Savings.jsx';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import ExpenseForm from './ExpenseForm.jsx';
import BarChart from './BarChart.jsx';
import ExpCategories from '../../utils/ExpCategories.js';
import BarCharReducer from '../../utils/BarCharReducer.js';


const useStyles = makeStyles({
  container:{
    display:'flex',
    // gridTemplateRows: '1fr, 2fr, 4fr, 2fr',
    gap: '5px',
    margin: 'auto',
    // backgroundColor: 'pink'
  },
  expenseForm: {
    flex: '0 0 50%',
    flexGrow: '1',
    flexBasis: '0',
    minWidth: '50%',
    margin: 'auto',
    flexShrink: '1',
    padding: 'auto',
    // display: 'flex',
    // flexDirection: 'column',
    // width: '80vw',
  },

  lineChart: {
    // backgroundColor:'#C4C4C4',
    flex: '0 0 50%',
    flexGrow: '1',
    flexBasis: '0',
    minWidth: '50%',
    margin: '5px',
    flexShrink: '1',
  }
})

const HomeExpense =({allExpense, addExpense}) => {
  const [all, setAllExpense] = useState(allExpense);
  useEffect(()=>
  {
    setAllExpense(allExpense);
  }, allExpense)

  useEffect(()=>
  {
    setAllExpense(all);
  }, all)

  let barCharExpense = ExpCategories.map(each=>BarCharReducer(all, each));
  console.log('barCharExpense', barCharExpense)

  console.log('allEpxnese in HomeExpense', allExpense);
  const classes = useStyles();
  return (
    <Box sx={{m:2, mx:'auto'}} className={classes.container} >
      <Box style = {{backgroundColor: 'transparent'}} clssName={classes.expenseForm}>
        <Box className={classes.form}>
          <ExpenseForm addExpenseTransaction={addExpense} />
        </Box>
        <Box style={{backgroundColor:'transparent'}} className={classes.piechart}>
          <Expense allExpense={all}/>
        </Box>
      </Box>
      <Box className={classes.lineChart}>
        <BarChart allExpense={barCharExpense}/>
      </Box>
    </Box>
  )
};
export default HomeExpense;
