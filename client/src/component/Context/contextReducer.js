//Recuer =>takes old state and action as the parameters
const axios = require('axios');

const contextReducer = (state, action)=> {
  // let transactions;
  // switch(action.type) {
  //   case 'Delete_Expense_Transaction':
  //     return axios.delete('/fire/expense', action.playload)
  //     .then(result => {
  //       console.log('delete expense', result);
  //       transactions = result.data;;
  //     })
  //     .catch(error=>console.log('error occurred when deleting expense', error))
  //   case 'Add_Expense_Transaction':
  //     return axios.post('/fire/expense', action.playload)
  //     .then(result => {
  //       console.log('post expense', result);
  //       transactions = result.data;
  //       return transactions;
  //     })
  //     .catch(error=>console.log('error occurred when adding expense', error))
  //   case 'Add_Income_Transaction':
  //     return axios.post('/fire/income', action.playload)
  //     .then(result => {
  //       console.log('post income', result);
  //       transactions = result.data;
  //       console.log('transactions returned', transactions)
  //       return transactions;
  //     })
  //     .catch(error=>console.log('error occurred when adding income', error))

  //   case 'Delete_Income_Transaction':
  //     return axios.delete('/fire/income', action.playload)
  //     .then(result => {
  //       transactions = result.data;
  //       console.log('delete income', result);
  //       return transactions;
  //     })
  //     .catch(error=>console.log('error occurred when deleting income', error))

  //   case 'get_All_Income':
  //     return axios.get('/fire/income')
  //     .then(result=> {
  //       transactions = result.data;
  //       console.log('getAllIncome', result);
  //       return transactions;
  //     })
  //     .catch(error=>console.log('error occurred when getting all the income', error))

  //   case 'get_All_Expense':
  //     return axios.get('/fire/expense')
  //     .then(result=> {
  //       transactions = result.data;
  //       console.log('getAllExpense', result);
  //       return transactions;
  //     })
  //     .catch(error=>console.log('error occurred when getting all the income', error))

  //   default:
      return state;
  // }
};

export default contextReducer;