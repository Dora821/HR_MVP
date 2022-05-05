const BarCharReducer = (arr, category) =>{
  let total = arr.filter((each => each.Category === category));
  let data = [];
  for (var i = 1; i < 13; i++) {
    let curMonth = total.filter(each=>Number(each.TransactionDate.slice(5, 7)) === i).map(each=>each.Amount);
    if (curMonth.length > 0) {
      let amount = Number(curMonth.reduce((a,b)=>Number(a) + Number(b)).toFixed(2));
      data.push(amount);
    } else {
      data.push(0);
    }
  }
  // console.log({name: category, data: data});
  return {name: category, data: data};
};

export default BarCharReducer;