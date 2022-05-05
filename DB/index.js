const mongoose = require("mongoose");

//build database connection
mongoose.connect('mongodb://localhost:27017/mvpbudget', {useNewURLParser:true});

var db = mongoose.connection;

// set up schema and models used by the app
var Schema = mongoose.Schema;

var expense = new Schema({
  Amount: Number,
  Vendor: String,
  TransactionDate: {type: Date, default: Date.now},
  Category: String,
  Impulse: Boolean
});

var Expense = mongoose.model('Expense', expense, 'Expense');

// Expense.updateMany({}, [{$set:
//   {
//     TransactionDate: {$dateFromString : {dateString: '$TransactionDate'}}
//   }
// }]
// );

module.exports = {
  saveExpense: (obj) => {
    return Expense.create(obj);
  },
  getTotalExpense: (obj) => {
    return Expense.find({}).sort({TransactionDate: '-1'}).exec();
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
    console.log('obj in DB', obj);
    return Expense.deleteOne(obj);
  },
};