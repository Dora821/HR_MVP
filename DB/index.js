const mongoose = require("mongoose");

//build database connection
mongoose.connect('mongodb://localhost:27017/mvpbudget', {useNewURLParser:true});

var db = mongoose.connection;

// set up schema and models used by the app
var Schema = mongoose.Schema;

var income = new Schema({
  amount: Number,
  payer: String,
  date: {type: Date, default: Date.now},
  category: String
});

var expense = new Schema({
  amount: Number,
  vendor: String,
  date: {type: Date, default: Date.now},
  category: String,
  impulse: Boolean
});

var Income = mongoose.model('Income', income, 'Income');
var Expense = mongoose.model('Expense', expense, 'Expense');

module.exports = {
  saveIncome: (obj) => {
    return Income.create(obj);
  },
  saveExpense: (obj) => {
    return Expense.create(obj);
  },
  getTotalIncome: (obj) => {
    return Income.find({}).exec();
  },
  getTotalExpense: (obj) => {
    return Expense.find({}).exec();
  },
  getCurMoExpense:(month)=> {
    return db.getCollection('Expense').aggregate([
      {
        $match: {
          $expr: {
            $eq: [{$month: 'createdAt'}, {$month: `${month}`}],
          }
        }
      }
    ]);
  },
  getAllImpulsive: (obj)=>{
    return Expense.find({impulsive: true}).sort({amount: '-1'}).limit(5).exec();
  },
  delteteExpense: (obj)=> {
    return Expense.remove(obj);
  },
  deleteIncome: (obj)=>{
    return Income.remove(obj);
  }

};