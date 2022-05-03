import React, {useState, useContext} from 'react';
import {TrackerContext} from '../Context/Context.js';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";



const Tracker=({allIncome})=>{
  console.log('allIncome received in Tracker', allIncome);

  let chartData = {
    labels: allIncome.map((each)=>Object.keys(each)[0]),
    datasets: [
      {
        label: "All Income",
        data: allIncome.map((data)=>Object.values(data)[0]),
        backgroundColor: [
          "#E6F69D",
          "#AADEA7",
          "#64C2A6",
          "#2D87BB",
        ],
        borderColor: "black" ,
        borderwidth: 2,
      }
    ]
  }
  console.log(chartData, chartData);

  return (
    <div style={{height: '350px', width: '350px', margin: 'auto'}}>
        <Pie data={chartData} />
    </div>
  )
}

export default Tracker;