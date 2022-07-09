import React, {useEffect} from 'react'
import { Line } from 'react-chartjs-2'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'

function Linechart(props) {
    let bal = props.bal;
    let equ = props.equ;
    let time = props.time;

    // useEffect(() => {
    //     getequandtime()
    //     getfeed()
    // }, [])

    // const getequandtime = async () => {
    //     axios.get("http://127.0.0.1:8000/api/getinfo")
    //     .then(res => {
    
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // const getequandtimebydate = async (date) => {
    //     axios.post("http://127.0.0.1:8000/api/get_trade_info_by_date", {date: date})
    //     .then(res => {
    //         console.log(res.data.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    // const getfeed = async (date) => {
    //     axios.get("http://127.0.0.1:8000/api/get_trade_info_by_date")
    //     .then(res => {
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }
    

    const data = {
        labels: time,
        datasets: [
            {
                data:equ,
                backgroundColor:['blue'],
                label:'Equity',
                datalabels: {
                    display: false,
                  },
                // fill:true
            },
            {
                data: bal,
                backgroundColor:['yellow'],
                label:'Balance',
                datalabels: {
                    display: false,
                  },
                // fill:true
            },
        ]
    }

    const options = {
        tension: 0.2,
        plugins: {
            title: {
                display: true,
                text: 'line chart',
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
            },
        },
        layout:{
            padding: {
                top: 50,
                right: 50,
                left: 50,
            }, 
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
    <div>
        {/* <form>
            <input type="date" onChange={(e) => getequandtimebydate(e.target.value)}/>
        </form> */}
        <Line 
        options={options}
        data={data}
        />
</div>

  )
}
export default Linechart