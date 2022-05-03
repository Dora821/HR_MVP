import React, {useState, useEffect} from 'react';
import DetailTable from './DetailTable.jsx';
import SearchBar from './SearchBar.jsx';

const Details = ({allExpense}) => {
  const [detailsToDisplay, setDetails] = useState(allExpense);
  console.log('allExpense', allExpense);
  console.log('detailsToDisplay', detailsToDisplay);
  useEffect(()=>{

    setDetails(allExpense);
  }, [detailsToDisplay])

  return (
    <div>
      <SearchBar></SearchBar>
      {allExpense.length>0 && <DetailTable allExpense={allExpense}/>}
    </div>
  )
}

export default Details;

