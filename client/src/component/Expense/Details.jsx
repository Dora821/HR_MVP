import React, {useState, useEffect} from 'react';
import DetailTable from './DetailTable.jsx';
import SearchBar from './SearchBar.jsx';

const Details = ({allExpense}) => {
  const [detailsToDisplay, setDetails] = useState(allExpense);
  console.log('allExpense in Details', allExpense);
  console.log('detailsToDisplay', detailsToDisplay);
  useEffect(()=>{
    setDetails(detailsToDisplay);
  }, [detailsToDisplay])

  return (
    <div>
      <SearchBar setDetails={setDetails} allExpense={allExpense}></SearchBar>
      {detailsToDisplay.length>0 && <DetailTable allExpense={detailsToDisplay}/>}
    </div>
  )
}

export default Details;

