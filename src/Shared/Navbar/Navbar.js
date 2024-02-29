import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { React, useContext, useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const {
    user,
    users,
    LogOut,
    notiNumber,
    setNotiNumber,
    searchQuery,
    setSearchQuery,
  } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const Navigate = useNavigate();
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    Navigate("/products");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handlLogout = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const [expanded, setExpanded] = useState(false);

  const handleSearchIconClick = () => {
    setExpanded(!expanded);
  };

  const [drop, setDrop] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const clearNotification = () => {
    setNotiNumber(0);
  };

  return (
    <motion.div className="lg:py-10">
      <div className="fixed w-full  top-0 left-0 z-50">
        <motion.div className="hidden max-w-[1200px]  px-[20px]  bg-white py-6  p-4  lg:flex  flex-col mx-auto lg:flex-row items-center ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 2 } }}
            className="basis-2/12 flex justify-center items-center"
          >
            <motion.div
              animate={{
                rotate: [0, 360], // Rotate from 0 degrees to 360 degrees
                // Change background color
                // Add a slight shadow
              }}
              transition={{
                duration: 6, // Increase the duration for a slower rotation
                repeat: Infinity,
                repeatType: "reverse", // Reverse the animation on each repeat
                ease: "linear", // Use a linear easing function for smooth rotation
              }}
            >
              <img
                className="w-10 cursor-pointer lg:flex hidden bg-white rounded-full h-10"
                src="https://i.ibb.co/pLZCHbJ/download-removebg-preview.png"
                alt=""
              />
            </motion.div>
            <motion.div>
              <Link to="/" className="text-[20px] font-semibold">
                {" "}
                Mobile Bazar{" "}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 2 } }}
            className="basis-8/12 flex  items-center justify-center text-center"
          >
            <ul className="flex-col lg:flex-row flex gap-3 ">
              <li>
                <Link
                  className="hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold"
                  to=""
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold"
                  to="/products"
                >
                  Shop
                </Link>
              </li>

              <motion.div className="dropdown relative items-center  justify-center text-black">
                <label
                  onClick={() => setDrop(!drop)}
                  tabIndex={0}
                  className="cursor-pointer "
                >
                  <motion.div className="flex items-center justify-between  text-[16px]"></motion.div>
                </label>
              </motion.div>
              <li>
                {user && (
                  <Link
                    className="hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold"
                    to="/dashboard"
                  >
                    Dashbored
                  </Link>
                )}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 2 } }}
            className={`${
              expanded && "basis-4/12"
            } z-50  gap-x-4 flex items-center justify-center`}
          >
            <motion.div
              className={`search-container ${
                expanded ? "w-[250px] z-50 border" : "w-10"
              } transition-all duration-300  rounded-lg overflow-hidden flex items-center`}
            >
              <input
                type="text"
                onChange={(e) => handleSearchChange(e.target.value)}
                className={`search-bar flex-1 py-2 px-3 outline-none bg-transparent ${
                  !expanded && "hidden"
                }`}
                placeholder="Search..."
              />

              <SearchOutlined
                onClick={handleSearchIconClick}
                className="text-2xl cursor-pointer"
              />
            </motion.div>

            <motion.div className="dropdown relative items-center justify-center text-black">
              <label
                onClick={() => setDrop(!drop)}
                tabIndex={0}
                className="cursor-pointer"
              >
                <motion.div className="">
                  {/* <FaUser size={25} className=''></FaUser> */}
                  <UserOutlined className="text-2xl hover:text-orange-500" />
                </motion.div>
              </label>
              {drop && (
                <ul
                  tabIndex={0}
                  className="menu absolute  border border-gray-200 top-7 gap-2 right-0 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-xl py-3  w-[250px]"
                >
                  <motion.div className="">
                    <motion.div className="flex items-center gap-2 pl-3  mb-3">
                      <img
                        src={users?.image}
                        className="w-8 h-8 rounded-full"
                        alt=""
                      />
                      <motion.div>
                        {user ? (
                          <div>
                            {" "}
                            <h1 className="text-left font-semibold">
                              {" "}
                              {users?.name}{" "}
                            </h1>
                            <p className="text-[12px]"> {users?.adress1} </p>
                          </div>
                        ) : (
                          <h1>Please Signup/Login</h1>
                        )}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <hr className="border border-black mb-2" />
                  {user?.email && (
                    <li className="">
                      <motion.div className="flex">
                        <UserOutlined className="text-xl" />
                        <motion.div>
                          <Link to="/profile">My Account</Link>
                        </motion.div>
                      </motion.div>
                    </li>
                  )}
                  <li className="">
                    <motion.div className="flex">
                      <ShoppingCartOutlined className="text-xl" />
                      <Link to="/dashboard/myorders">My Order</Link>
                    </motion.div>
                  </li>
                  <li>
                    {user?.email ? (
                      <>
                        <motion.div className="flex">
                          <FaSignOutAlt size={20} color="black" />
                          <Link onClick={handlLogout} className="">
                            SignOut
                          </Link>
                        </motion.div>
                      </>
                    ) : (
                      <motion.div className="flex">
                        <FaSignInAlt />{" "}
                        <Link className="" to="/login">
                          Login
                        </Link>
                      </motion.div>
                    )}
                  </li>
                  <li>
                    <motion.div className="">
                      <label className="swap justify-center items-center w-8 h-8 swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" />

                        {/* sun icon */}
                        <svg
                          className="swap-on fill-current w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                          className="swap-off fill-current w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </motion.div>
                  </li>
                </ul>
              )}
            </motion.div>

            <Link
              onClick={clearNotification}
              to="/shoppingcart"
              className="relative"
            >
              <ShoppingCartOutlined className="text-2xl cursor-pointer text-orange-500" />
              {notiNumber !== 0 && (
                <div className="w-5 h-5 absolute -top-1 left-5 flex justify-center  rounded-full bg-orange-500">
                  <p className=" text-white  font-bold">{notiNumber}</p>
                </div>
              )}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <nav className="flex items-center  bg-white shadow-2xl p-4 fixed w-full top-0 left-0 z-50  md:hidden  justify-between   px-4  text-white">
        {/* Mobile Menu */}
        <motion.div className="md:hidden">
          {isOpen ? (
            <FiX
              color="black"
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FiMenu
              color="black"
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          )}
        </motion.div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <motion.div
            className={`md:hidden fixed    top-0 left-0 w-full flex justify-between   transition-transform duration-1000 ease-in-out transform z-10 bg-gray-800 p-4 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="">
              <li className="my-4">
                <Link
                  className="hover:bg-border hover:border-gray-300 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold "
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="my-4">
                <Link
                  className="hover:bg-border hover:border-gray-300 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold "
                  to=""
                >
                  Contact us
                </Link>
              </li>
              <li className="my-4">
                <Link
                  className="hover:bg-border hover:border-gray-300 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold "
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold"
                  to="/products"
                >
                  Shop
                </Link>
              </li>
              <li className="my-4">
                {user && (
                  <Link
                    className="hover:bg-gray-200 tra-border hover:border-gray-300uration-400  py-2 px-3 hover:rounded-sm text-[16px] font-semibold "
                    to="/dashboard"
                  >
                    Dashbored
                  </Link>
                )}
              </li>
            </ul>
            <motion.div>
              <FiX
                color="white"
                onClick={toggleMenu}
                className="text-2xl  cursor-pointer"
              />
            </motion.div>
          </motion.div>
        )}

        <motion.div className="dropdown relative items-center justify-center text-black">
          <label
            onClick={() => setDrop(!drop)}
            tabIndex={0}
            className="cursor-pointer"
          >
            <motion.div className="">
              <FaUser size={25} className=""></FaUser>
            </motion.div>
          </label>
          {drop && (
            <ul
              tabIndex={0}
              className="menu absolute  border border-gray-200 top-11 gap-2 menu-compact dropdown-content right-4 mt-3 p-2 shadow bg-base-100 rounded-xl py-3  w-[250px]"
            >
              <motion.div className="flex items-center gap-2 pl-3  mb-3">
                <img src="" className="w-8 h-8 rounded-full" alt="" />
                <motion.div>
                  <h1 className="text-left font-semibold">Sadekin Chow</h1>
                  <p className="text-[12px]">Chiksha,Bangladesh</p>
                </motion.div>
              </motion.div>

              <hr className="border border-black mb-2" />
              {user?.email ? (
                <li className="">
                  <motion.div className="flex hover:bg-slate-200">
                    <FaUser size={20} color="black" />
                    <motion.div>
                      <Link to="/dashboard/profile">My Account</Link>
                    </motion.div>
                  </motion.div>
                </li>
              ) : (
                <></>
              )}
              <li className="">
                <motion.div className="flex">
                  <MdShoppingCart size={20} color="black" />
                  <Link>My Order</Link>
                </motion.div>
              </li>

              <li>
                {user?.email ? (
                  <>
                    <motion.div className="flex">
                      <FaSignOutAlt size={20} color="black" />
                      <Link onClick={handlLogout} className="">
                        SignOut
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <motion.div className="flex">
                    <FaSignInAlt />{" "}
                    <Link className="" to="/login">
                      Login
                    </Link>
                  </motion.div>
                )}
              </li>
            </ul>
          )}
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
