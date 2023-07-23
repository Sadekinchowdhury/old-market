import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TopRevenueProductsChart = () => {
    // Sample data for top revenue products (replace this with your actual data)
    const topRevenueProductsData = [
        { name: "Xiaomi", revenue: 2500 },
        { name: "Redmi", revenue: 1800 },
        { name: "Sumsung", revenue: 3200 },
        // ... and so on for other products
    ];

    const COLORS = ["#60A5FA", "#10B981", "#FBBF24", "#F87171", "#A78BFA", "#34D399"];

    return (
        <div className="w-full h-80    mx-auto my-10 p-4 bg-white rounded-lg ">
            <div>
                <h2 className="text-xl font-semibold mb-4">Top Revenue Products</h2>
                <ResponsiveContainer width="100%" height={300}>

                    <PieChart>
                        <Pie
                            data={topRevenueProductsData}
                            dataKey="revenue"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {topRevenueProductsData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default TopRevenueProductsChart;
