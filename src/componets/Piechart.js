import React from 'react'
import { Pie } from 'react-chartjs-2'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'


function Piechart() {
    const data = {
        labels: ['January', 'February'],
        datasets: [
            {
                label: 'My First dataset',
                data: [65, 99],
                backgroundColor:['blue','green'],
                borderColor: ['red','black'],
                borderWidth: 5,
                borderRadius: 10,
                base: 0,
                PiePercentage: 0.5,
                categoryPercentage: 0.5,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Test Pie chart',
                position: 'bottom',
                font: {
                    size: 54
                },
                color: '#f00'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size:10
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    beginAtZero: true
                },
                grid:{
                    display: false
                },

            },
            x:{
                grid:{
                    display: false
                },
            },
        }
    }

  return (
        <Pie 
        options={options}
        data={data}
        />
  )
}
export default Piechart