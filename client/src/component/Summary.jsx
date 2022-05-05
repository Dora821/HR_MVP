import React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import {AiTwotoneCalendar} from 'react-icons/ai';
import {AiOutlineAccountBook} from 'react-icons/ai';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import formatDate from '../utils/formatDate.js';
import formatter from '.././utils/formatDollar.js';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  card: {
    flex: 1,
    height: '180px',
    border: 'black solid 2px',
    margin: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'pink'
  },
  child: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
function Summary({allExpense}) {

  console.log('allExpense in summary, ', allExpense);
  console.log('firstExpense', allExpense[allExpense.length-1]);
  console.log('lastExpense', allExpense[0]);

  const classes = useStyles();

  const getTotal = (allExpense)=>{
    let sum=0;
    for (let i=0; i < allExpense.length; i++) {
      sum += Number(allExpense[i].Amount);
    }
    return sum.toFixed(2);
  }

  return (
    <div className={classes.container}>
      <div className={classes.card}>
            <AiTwotoneCalendar className={classes.child} size={40}/>
            <p style={{fontSize: '30px', fontFamily: 'Georgia, serif'}}>{allExpense[allExpense.length-1].TransactionDate.slice(0, 10)}</p>
            <p style={{color: 'grey', fontFamily: 'Georgia, serif'}}>First Expense Date</p>
      </div>
      <div className={classes.card}>
        <AiTwotoneCalendar className={classes.child} size={40}/>
        <p style={{fontSize: '30px', fontFamily: 'Georgia, serif'}}>{allExpense[0].TransactionDate.slice(0,10)}</p>
        <p style={{color: 'grey',  fontFamily: 'Georgia, serif'}}>Last Expense Date</p>
      </div>
      <div className={classes.card}>
        <AiOutlineAccountBook className={classes.child} size={40}/>
        <p style={{fontSize: '30px', fontFamily: 'Georgia, serif'}}>{allExpense.length}</p>
        <p style={{color: 'grey', fontFamily: 'Georgia, serif'}}>Number of Expenses</p>
      </div>
      <div className={classes.card}>
        <FaRegMoneyBillAlt className={classes.child} size={40}/>
        <p style={{fontSize: '30px', fontFamily: 'Georgia, serif'}}>{formatter.format(getTotal(allExpense))}</p>
        <p style={{color: 'grey',  fontFamily: 'Georgia, serif'}}>Total Expenses</p>
      </div>
    </div>
  )
}
export default Summary;