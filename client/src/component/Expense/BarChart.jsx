import ReactApexChart from 'react-apexcharts';
import React from 'react';
import formatter from '../../utils/formatDollar.js';
import Color from '../../utils/Color.js';

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: this.props.allExpense,
      options: {
        colors: Color,
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        // responsive: [{
        //   breakpoint: 480,
        //   options: {

        //   }
        // }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            columnWidth: '65%'
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
               return formatter.format(val)
            },
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          },
          labels: {
            formatter: function (val) {
              return formatter.format(val);
            }
          },
          min: 1000,
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          formatter: function(value, { seriesIndex, dataPointIndex, w }) {
            return formatter.format(value)
          }
        }
      },
    };
  }



  render() {
    return (


<div id="chart">
<ReactApexChart options={this.state.options} series={this.props.allExpense} type="bar" height={350} />
</div>


    );
  }
}

export default BarChart;