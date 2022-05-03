import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ExpenseDes({category}) {


  console.log('category', category)
  return (
  //  <Box>
  //    <List>
  //      {category.map((each)=>
  //        <listItem style={{backgroundColor: each.color}}>
  //          <ListItemText primary={Object.keys(each)[0]} />
  //        </listItem>
  //      )}
  //    </List>
  //  </Box>
  <ul class='list-group'>
    <li class='list-group-item grocery' style={{backgroundColor: '#FBE9E7', height:'40px', alignContent: 'center'}}>{Object.keys(category[0])[0]} : ${Object.values(category[0])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#FFCCBC', height:'40px', }}>{Object.keys(category[1])[0]} : ${Object.values(category[1])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#FFAB91',height:'40px'}}>{Object.keys(category[2])[0]} : ${Object.values(category[2])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#FF8A65',height:'40px'}}>{Object.keys(category[3])[0]} : ${Object.values(category[3])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#FF7043',height:'40px'}}>{Object.keys(category[4])[0]} : ${Object.values(category[4])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#FF5722',height:'40px'}}>{Object.keys(category[5])[0]} : ${Object.values(category[5])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#F4511E',height:'40px'}}>{Object.keys(category[6])[0]} : ${Object.values(category[6])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#BF360C',height:'40px'}}>{Object.keys(category[7])[0]} : ${Object.values(category[7])[0]}</li>
  </ul>
  )
}
export default ExpenseDes;