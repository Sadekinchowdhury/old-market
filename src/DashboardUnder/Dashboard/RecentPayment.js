import React from 'react';
import { motion } from 'framer-motion';

const RecentTable = () => {
    const data = [
        { id: 1, time: '2023-07-23 10:00', paymentMethod: 'Credit Card', amount: 100, status: "Processing" },
        { id: 2, time: '2023-07-23 11:30', paymentMethod: 'PayPal', amount: 50, status: "Processing" },
        { id: 3, time: '2023-07-23 14:15', paymentMethod: 'Bank Transfer', amount: 75, status: "Processing" },
        // Add more data as needed
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
            className="flex flex-col border rounded-xl">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200 font-bold">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        User ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Time
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Payment Method
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.paymentMethod}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RecentTable;
