import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import formatter from '../../utils/formatDollar.js';

function ExpenseDes({category}) {
  // console.log('category', category)
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
    <li class='list-group-item grocery' style={{backgroundColor: '#8ECAE6', height:'40px', alignContent: 'center'}}>{Object.keys(category[0])[0]} : {formatter.format(Object.values(category[0])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#219EBC', height:'40px', }}>{Object.keys(category[1])[0]} : {formatter.format(Object.values(category[1])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#023047',height:'40px'}}>{Object.keys(category[2])[0]} : {formatter.format(Object.values(category[2])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#E0FBFC',height:'40px'}}>{Object.keys(category[3])[0]} : {formatter.format(Object.values(category[3])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#FB8500',height:'40px'}}>{Object.keys(category[4])[0]} : {formatter.format(Object.values(category[4])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#355070',height:'40px'}}>{Object.keys(category[5])[0]} : {formatter.format(Object.values(category[5])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#6D597A',height:'40px'}}>{Object.keys(category[6])[0]} : {formatter.format(Object.values(category[6])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#B56576',height:'40px'}}>{Object.keys(category[7])[0]} : {formatter.format(Object.values(category[7])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#FFC152',height:'40px'}}>{Object.keys(category[8])[0]} : {formatter.format(Object.values(category[8])[0])}</li>
    <li class='list-group-item' style={{backgroundColor: '#EAAC8B',height:'40px'}}>{Object.keys(category[9])[0]} : {formatter.format(Object.values(category[9])[0])}</li>
  </ul>
  )
}
export default ExpenseDes;

