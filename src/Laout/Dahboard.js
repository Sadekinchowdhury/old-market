import { React, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import UseAdmin from "../UseAdmin/UseAdmin";
import UseBuyer from "../UseBuyer/UseBuyer";
import UseSeller from "../UseSeller/UseSeller";

import { motion } from "framer-motion";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { AuthContext } from "../Context/AuthProvider";
import Sidebar from "./DashboardSidebar";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);

  const [isSeller] = UseSeller(user?.email);
  const [isBuyer] = UseBuyer(user?.email);
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState({});

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetch(`https://old-server.vercel.app/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user?.email]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full lg:flex-row">
        <div
          className={`bg-gray-900 lg:z-10 fixed top-[65px] left-0 z-10 h-auto shadow-2xl w-1/2 px-4 lg:hidden block    py-6 transform duration-1000 ${
            !open
              ? "w-1/12 ml-1 rounded-l-full transform duration-1000 z-50"
              : "w-2/3"
          } `}
        >
          {/* for mobile device */}
          {open && <Sidebar users={users} key={users._id} />}
          <div className="-right-4  bg-gray-900 rounded-r-full top-0 w-10 h-[46px] flex justify-center items-center absolute lg:static lg:hidden transform duration-1000">
            {open ? (
              <AiFillLeftCircle
                onClick={() => setOpen(!open)}
                size={30}
                color="white"
                className="cursor-pointer"
              />
            ) : (
              <AiFillRightCircle
                onClick={() => setOpen(!open)}
                size={30}
                color="white"
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* {desktop} */}
        <div
          className={`bg-gray-900 text-white   shadow-2xl   w-3/12  lg:block hidden   top-0 mx-0  rounded-b-lg py-6 `}
        >
          <Sidebar users={users} key={users._id} />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}
          className="bg-slate-300 absolute min-h-screen  top-[60px]  lg:static w-full mx-auto lg:w-10/12  m-0  rounded-none flex-grow p-2"
        >
          <Outlet></Outlet>
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoard;
