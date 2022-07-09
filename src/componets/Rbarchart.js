import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios'

Chart.register(ChartDataLabels);
function Rbarchart() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        getequandtime()
    }, [])

    const getequandtime = async () => {
        axios.get("http://127.0.0.1:8000/api/getinfo")
        .then(res => {
            setInfo(res.data[0])
            console.log(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
    }

    const data = {
        labels: [info.Time],
        datasets: [
            {
                label: 'Equity',
                data: [info.Equity],
                backgroundColor:['blue'],
                borderColor: ['red','black'],
                borderWidth: 1,
                borderRadius: 10,
                base: 0,
                title:'Equity',
                datalabels: {
                    color: 'green',
                    anchor: 'end',
                    align: 'end',
                    offset: 15,
                    formatter: (value, context) => {
                        return 'Equity';
                    },
                    font:{
                        size:20
                    },
                  }
            },
            {
                label: 'Balance',
                data: [info.Balance],
                backgroundColor:['yellow'],
                borderColor: ['red','black'],
                borderWidth: 1,
                borderRadius: 10,
                base: 0,
                datalabels: {
                    color: 'green',
                    anchor: 'end',
                    align: 'end',
                    offset: 15,
                    formatter: (value, context) => {
                        return 'Balance';
                    },
                    font:{
                        size:20
                    },
                  }
            },
        ]
    }

    const options = {
        responsive: true,
        barPercentage: .9,
        categoryPercentage: 0.2,
        plugins: {
            title: {
                display: true,
                text: 'Bar chart',
                position: 'bottom',
                font: {
                    size: 54
                },
                color: '#f00'
            },
            datasets: {
                labels: {
                   title:{
                        display: true,
                        text: 'Bar chart',
                   }
                }},
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size:10
                    }
                }
            },
        },
        layout:{
            padding: {
                top: 50,
            }, 
        },
        scales: {
            y: {
                ticks: {
                    beginAtZero: false
                },
                grid:{
                    display: false
                },
                display: true,

            },
            x:{
                grid:{
                    display: false
                },
                ticks: {
                    display:false
                }
            },
        }
    }

  return (
        <Bar 
        options={options}
        data={data}
        />
  )
}
export default Rbarchart