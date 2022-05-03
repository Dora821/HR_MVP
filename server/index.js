require('dotenv').config();
const express = require('express');
const app = express ();
const path = require("path");
const cors = require('cors');
const db = require('../DB/index.js');
// const db = require('./DB/index.js');

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

app.get('/fire/income', (req, res)=>{
  console.log('get income is being called', req.body);
  db.getTotalIncome()
    .then(data=>res.send(data))
    .catch(err=>console.error(err));
});

app.post('/fire/income', (req, res)=>{
  console.log('post income is being called', req.body);
  income = req.body;
  db.saveIncome(income)
    .then(()=> {
      return db.getTotalIncome();
    })
    .then(result=>{
      console.log(result);
      res.send(result);
    })
    .catch(err=>console.log(err));
});

app.get('/fire/expense', (req, res)=>{
  console.log('get expense is being called', req.body);
  db.getTotalExpense()
    .then(data=>res.send(data))
    .catch(err=>console.error(err));
});

app.post('/fire/expense', (req, res)=>{
  console.log('post expense is being called', req.body);
  let expense = req.body;
  db.saveExpense(expense)
    .then(()=> {
      return db.getTotalExpense();
    })
    .then(result=>res.send(result))
    .catch(err=>console.log(err));
});

app.get('/fire/impulsive', (req, res)=>{
  console.log('get impulsive expense is being called', req.body);
  db.getAllImpulsive()
    .then(data=>res.send(data))
    .catch(err=>console.error(err));
});

app.delete('/fire/expense', (req, res)=>{
  console.log('delete expense is being called', req.body);
  let deletedObj = req.body;
  db.delteteExpense(deletedObj)
    .then(()=> {
      return db.getTotalExpense();
    })
    .then(result=>res.send(result))
    .catch(err=>console.error(err));
});

app.delete('/fire/income', (req, res)=>{
  console.log('delete income is being called', req.body);
  let deletedObj = req.body;
  db.delteteIncome(deletedObj)
    .then(()=> {
      return db.getTotalIncome();
    })
    .then(result=>res.send(result.data))
    .catch(err=>console.error(err));
});

