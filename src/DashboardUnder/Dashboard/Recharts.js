// import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// const Recharts = () => {

//     const data = [
//         {
//             name: 'January',
//             uv: 4000,
//             pv: 2400,
//             amt: 2400,
//         },
//         {
//             name: 'Page B',
//             uv: 3000,
//             pv: 1398,
//             amt: 2210,
//         },
//         {
//             name: 'Page C',
//             uv: 2000,
//             pv: 9800,
//             amt: 2290,
//         },
//         {
//             name: 'Page D',
//             uv: 2780,
//             pv: 3908,
//             amt: 2000,
//         },
//         {
//             name: 'Page E',
//             uv: 1890,
//             pv: 4800,
//             amt: 2181,
//         },
//         {
//             name: 'Page F',
//             uv: 2390,
//             pv: 3800,
//             amt: 2500,
//         },
//         {
//             name: 'Page G',
//             uv: 3490,
//             pv: 4300,
//             amt: 2100,
//         },
//     ];

//     return (
//         <div>

//             <BarChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pv" fill="#8884d8" />
//                 <Bar dataKey="uv" fill="#82ca9d" />
//             </BarChart>

//         </div>
//     );
// };

// export default Recharts;

// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const EarningsSummaryChart = () => {
//     // Sample data for 12 months (replace this with your actual data)
//     const monthlyEarningsData = [
//         { month: "Jan", earnings: 1000 },
//         { month: "Feb", earnings: 1500 },
//         { month: "Mar", earnings: 2000 },
//         { month: "Apr", earnings: 2500 },
//         { month: "May", earnings: 1800 },
//         { month: "Jun", earnings: 2200 },
//         { month: "Jul", earnings: 2700 },
//         { month: "Aug", earnings: 3000 },
//         { month: "Sep", earnings: 2800 },
//         { month: "Oct", earnings: 2400 },
//         { month: "Nov", earnings: 2600 },
//         { month: "Dec", earnings: 3200 },
//     ];

//     return (
//         <div className="w-full h-80 md:w-1/2 mx-auto my-10 p-4 bg-white rounded-lg shadow">
//             <h2 className="text-xl font-semibold mb-4">Earnings Summary (Yearly)</h2>
//             <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={monthlyEarningsData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="earnings" fill="#60A5FA" />
//                 </BarChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };

// export default EarningsSummaryChart;
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from 'framer-motion';

const EarningsSummaryChart = () => {
    // Sample data for 12 months (replace this with your actual data)
    const monthlyData = [
        { month: "Jan", earnings: 1000, Order: 20 },
        { month: "Feb", earnings: 1500, Order: 25 },
        { month: "Jan", earnings: 1000, Order: 20 },
        { month: "Feb", earnings: 1500, Order: 25 },
        { month: "Jan", earnings: 1000, Order: 20 },
        { month: "Feb", earnings: 1500, Order: 25 },

    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
            exit={{ opacity: 0, x: 100, transition: { duration: 3 } }}
            className="w-full h-80  mx-auto my-10 p-4  bg-white rounded-lg ">

            <div className="w-full h-auto  ">
                <h2 className="text-xl font-semibold mb-4">Earnings and Order per month (2023)</h2>
                <ResponsiveContainer width='100%'
                    height={290}>
                    <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="earnings" fill="#60A5FA" name="Earnings" />
                        <Bar dataKey="Order" fill="#10B981" name="Order" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default EarningsSummaryChart;

