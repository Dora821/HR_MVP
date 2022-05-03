import React, {useState, useContext} from 'react';
import {TrackerContext} from '../Context/Context.js';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function ExpenseTracker({allExpense}) {
  console.log('allExpense received in Tracker', allExpense);

  let chartData = {
    labels: allExpense.map((each)=>Object.keys(each)[0]),
    datasets: [
      {
        label: "All Income",
        data: allExpense.map((data)=>Object.values(data)[0]),
        backgroundColor: [
          "#FBE9E7",
          "#FFCCBC",
          "#FFAB91",
          "#FF8A65",
          "#FF7043",
          "#FF5722",
          "#F4511E",
          "#BF360C",
          '#FFC154',
          '#FFC152',
        ],
        borderColor: "black" ,
        borderwidth: 2,
      }
    ]
  }
  console.log(chartData, chartData);

  return (
    <div  style={{height: '400px', width: '400px', margin: 'auto'}}>
        <Pie data={chartData} />
    </div>
  )
}
export default ExpenseTracker;