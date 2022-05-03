import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer.js';
import 'regenerator-runtime/runtime';
const initialState = [];


export const TrackerContext = createContext(initialState);

export const Provider = ({children}) => {
  // let allTransactions;
  const [allTransactions, dispatch] = useReducer(contextReducer, initialState);
  // async ()=>{
  //   allTransactions = await transactions();
  //   console.log('allTransactions', allTransactions);
  // }
  const addExpenseTransaction = (transaction)=>dispatch({type:'Add_Expense_Transaction', playload: transaction});
  const deleteExpenseTransaction = (id)=>dispatch({type:'Delete_Expense_Transaction', playload:id});
  const addIncomeTransaction = (transaction)=>dispatch({type:'Add_Income_Transaction', playload: transaction});
  const deleteIncomeTransaction = (id)=>dispatch({type:'Delete_Income_Transaction', playload: id});
  const getAllIncome =()=>dispatch({type: 'get_All_Income'});
  const getAllExpense=()=>dispatch({type: 'get_All_Expense'});
  return (
    <TrackerContext.Provider value={{addExpenseTransaction,deleteExpenseTransaction, addIncomeTransaction, deleteIncomeTransaction, getAllIncome, getAllExpense}}>
      {children}
    </TrackerContext.Provider>
  );
}
export default Provider;