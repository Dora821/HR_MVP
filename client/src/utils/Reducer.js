const Reducer = (array, category) => {
  // console.log('obj in the obj', obj);
  if (array.length > 0) {
    let curArray = array.filter((each)=>each.Category === category).map(each=>each.Amount);
    // console.log('curArray being added', curArray);
    if (curArray.length > 0) {
      // console.log('curArray', curArray);
      // console.log('reduce amount', curArray.reduce((a, b)=> Number(a)+ Number(b));
      return Number(curArray.reduce((a, b)=>Number(a)+ Number(b)).toFixed(2));
    }
  } else {
    return 0;
  }
};

export default Reducer;
