import React, {useState, useEffect} from 'react'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'
import Linechart from './Linechart'

function Feeds() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        getfeed()
    }, [])
    const getfeed = async (date) => {
        axios.get("http://127.0.0.1:8000/api/get_trade_info_by_date")
        .then(res => {
            console.log(res.data)
            setInfo(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const getequandtimebydate = async (date) => {
        axios.post("http://127.0.0.1:8000/api/get_trade_info_by_date", {date: date})
        .then(res => {
            console.log(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
  return (
    <div>
         <form>
            <input type="date" onChange={(e) => getequandtimebydate(e.target.value)}/>
        </form>
        {info.map((item, index) => {
            return (
                <div key={index}>
                    <Linechart 
                    bal={item.map((obj => obj.Balance))} 
                    equ={item.map((obj => obj.Equity))} 
                    time={item.map((obj => obj.Time))}/>
                </div>
            )
        }) }                                                                                                      
    </div>
  )
}

export default Feeds