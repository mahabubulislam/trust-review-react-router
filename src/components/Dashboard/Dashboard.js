import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    const data1 = [...data]
    useEffect(() => {
        fetch('chartdata.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
                <h3 className='text-3xl text-center text-indigo-600 my-2'>Investment vs Revenue</h3>
                <BarChart
                    width={420}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <h3 className='text-3xl text-center text-indigo-600 my-2'>Investment vs Revenue</h3>

                <PieChart width={420} height={250}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data1} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>
            <div>
                <h3 className='text-3xl text-center text-indigo-600 my-2'>Investment vs Revenue</h3>

                <LineChart width={420} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div>
            <h3 className='text-3xl text-center text-indigo-600 my-2'>Month wise Sell</h3>

                <AreaChart
                    width={420}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;