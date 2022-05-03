import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function IncomeDes({category}) {
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
    <li class='list-group-item' style={{backgroundColor: '#E6F69D'}}>{Object.keys(category[0])[0]} : ${Object.values(category[0])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#AADEA7'}}>{Object.keys(category[1])[0]} : ${Object.values(category[1])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#64C2A6'}}>{Object.keys(category[2])[0]} : ${Object.values(category[2])[0]}</li>
    <li class='list-group-item' style={{backgroundColor: '#2D87BB'}}>{Object.keys(category[3])[0]} : ${Object.values(category[3])[0]}</li>
  </ul>
  )
}
export default IncomeDes