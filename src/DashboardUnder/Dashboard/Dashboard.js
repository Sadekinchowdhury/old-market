import { motion } from "framer-motion";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import {
  FaCheckCircle,
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import TopRevenueProductsChart from "./PieDash";
import RecentTable from "./RecentPayment";
import Recharts from "./Recharts";
const Dashboard = () => {
  return (
    <div className="max-w-[1200px] py-[20px] px-3">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
        exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
      >
        <div className="flex items-center justify-center p-[15px] gap-[20px] bg-indigo-500 rounded-sm shadow-2xl">
          <div>
            <FaShoppingCart size={40} />
          </div>
          <div>
            <h1 className="text-[16px] font-semibold text-white">
              {" "}
              Today Order
            </h1>
            <p className="text-[20px] font-semibold  text-white">$2345</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-[15px] gap-[20px] bg-indigo-500 rounded-sm shadow-2xl">
          <div>
            <FaShoppingBag size={40} />
          </div>
          <div>
            <h1 className="text-[16px] font-semibold text-white">
              {" "}
              This Week Order
            </h1>
            <p className="text-[20px] font-semibold   text-white">$2345</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-[15px] gap-[20px] bg-indigo-500 rounded-sm shadow-2xl">
          <div>
            <FaShoppingBasket size={40} />
          </div>
          <div>
            <h1 className="text-[16px] font-semibold text-white">
              {" "}
              This Month Order
            </h1>
            <p className="text-[20px] font-semibold   text-white">$2345</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-[15px] gap-[20px] bg-indigo-500 rounded-sm shadow-2xl">
          <div>
            <FaShoppingBasket size={40} />
          </div>
          <div>
            <h1 className="text-[16px] font-semibold text-white">Last Year</h1>
            <p className="text-[20px] font-semibold   text-white">$2345</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
        exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-7"
      >
        <div className="flex items-center justify-center gap-5 py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl">
          <div>
            <FaShoppingCart size={30} />
          </div>
          <div>
            <h1 className="text-[14px] font-semibold"> Total Order</h1>
            <p className="text-xl font-semibold text-center">87</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl">
          <div>
            <BiRefresh size={30} />
          </div>
          <div>
            <h1 className="text-[14px] font-semibold"> Pending Order</h1>
            <p className="text-xl font-semibold text-center">37</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl">
          <div>
            <MdUpdate size={30} />
          </div>
          <div>
            <h1 className="text-[14px] font-semibold">Processing Order</h1>
            <p className="text-xl font-semibold text-center">5</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl">
          <div>
            <FaCheckCircle color="green" size={30} />
          </div>
          <div>
            <h1 className="text-[14px] font-semibold">Order Delivered</h1>
            <p className="text-xl font-semibold text-center">45</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Recharts className="" />
        <TopRevenueProductsChart className="" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
        exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
        className="mt-10"
      >
        <h1 className="py-4 text-xl font-semibold">Recent Orders</h1>
        <RecentTable />
      </motion.div>
    </div>
  );
};

export default Dashboard;
