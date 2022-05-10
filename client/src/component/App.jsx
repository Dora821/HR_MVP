import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import HomeExpense from './Expense/Home.jsx';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import 'regenerator-runtime/runtime';
const axios = require('axios');
import Details from './Expense/Details.jsx';
import NavBar from './NavBar.jsx';
import Summary from './Summary.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Authentication/SignIn.jsx';
import SignUp from './Authentication/SignUp.jsx';
import {createUserWithEmailAndPassword, updateProfile,onAuthStateChanged, signOut, signInWithEmailAndPassword, useAuth} from 'firebase/auth';
import {auth} from './../firebase-config.js';
import "regenerator-runtime/runtime.js";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



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
  const [user, setCurrentUser] = useState({})
  const [exisitingUser, setUserStatus] = useState(true);
  const [userName, setUserName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPW, setRegisterPW] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPW, setLoginPW] = useState('');
  console.log('registerEmail', registerEmail, typeof(registerEmail));
  console.log('registerPW', registerPW);
  console.log('loginEmail', loginEmail, typeof(loginEmail));
  console.log('loginPW', loginPW);
  console.log('existing user', exisitingUser);
  console.log('username,', userName);

  onAuthStateChanged(auth, (User) => {
    setCurrentUser(User);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPW);
      console.log('authCurrentUser', auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => setCurrentUser(user))
        .catch((err) => console.log(`profile can't be udpated`, err))

    } catch (err) {
      console.log('register err', err);
    }
  };

  const login = ()=>{
    signInWithEmailAndPassword(auth, loginEmail, loginPW)
    .then(()=>
    {
      setCurrentUser(user);
      console.log('login Button is working');
    })
    .catch(err=>{
      console.log('login err', err.message);
    })
  };

  const logout = async ()=> {
    await signOut(auth);
  };


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

  const deleteExpenseTransaction = (index) => {
    let deleteObj;
    console.log('idx', index);
    console.log('allExpense in delete', allExpense);
    for (var i=0; i < allExpense.length; i++) {
      if (i === index) {
        deleteObj = allExpense[i];
        break;
      }
    }
    console.log('item to be deleted', deleteObj);
    axios.delete('/fire/expense', {data: {_id: deleteObj._id}})
    .then(result => {
      console.log('delete post expense', result);
      let transactions = result.data;
      setAllExpense(transactions);
    })
    .catch(error=>console.log('error occurred when adding expense', error))
  }
  console.log('allxpense in app,', allExpense)

  const MainHome=()=>{
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
        {allExpense.length === 0 ? <p>'Loading'</p> : <Details allExpense={allExpense} deleteExpense={deleteExpenseTransaction}/>}
      </Box>
    </Box>
    )
  }

  return (
    <Router>
    <Routes>
      <Route exact path="/main" element={MainHome()} />
      <Route exact path="/" element={<SignIn login={login} setEmail= {setLoginEmail} setPW={setLoginPW} />} />
      <Route exact path="/signup" element={<SignUp setUserName={setUserName} register={register} setEmail= {setRegisterEmail} setPW={setRegisterPW}/>} />
    </Routes>
  </Router>

  )

};


export default App;

