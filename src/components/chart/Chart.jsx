import React from 'react'
import "./chart.scss"
import {
    AreaChart,
    Area,
    XAxis,
    // YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "january", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 3000 },
    { name: "April", Total: 800 },
    { name: "May", Total: 1900 },
    { name: "June", Total: 1200 },

];
const Chart = () => {
    return (
        <div className='chart'>
            <div className="title">Last 6 month (Revenue)</div>
            <ResponsiveContainer   width="100%" aspect={3/1} >
            <AreaChart
             width={730}
              height={350}
            data={data}
             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                <defs>
                    <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#87ceeb" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#87ceeb" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" color='grey' />
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
            
            </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
