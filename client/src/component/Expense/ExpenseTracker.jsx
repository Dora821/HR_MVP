import React, {useState, useContext} from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import Color from '../../utils/Color.js';
class ExpenseTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.allExpense.data,
      options: {
        colors: Color,
        chart: {
          type: 'donut',
        },
        labels: this.props.allExpense.name,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              id: this.props.allExpense.id,
              width: '100%',
              height: 400,
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
  };
};

  render() {
    console.log('this.props.data', this.props.allExpense.data);
    return (


<div id="chart">
<ReactApexChart width='100%' height={300} options={this.state.options} series={this.props.allExpense.data} type="donut" />
</div>


    );
  }
}

export default ExpenseTracker;