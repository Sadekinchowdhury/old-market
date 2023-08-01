import React from 'react';
import { FaProductHunt, FaShoppingCart } from 'react-icons/fa';
import { AiFillSecurityScan } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'

import { motion } from 'framer-motion';

const Shopings = () => {
    return (
        <motion.div className='w-11/12 mx-auto'>
            <motion.div

                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}

                className='grid  mx-auto md:grid-cols-4 grid-cols-1  gap-3 '>

                <motion.div className="card rounded-md text-center  items-center py-2 px-3  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 shadow-xl">
                    <figure><FaShoppingCart className='w-8 h-8 mb-2'></FaShoppingCart></figure>

                    <h2 className="text-[17px] text-center">Free Shopping</h2>

                </motion.div>
                <motion.div className="card rounded-md text-center  items-center  py-2 px-5  bg-gradient-to-r from-cyan-200 to-cyan-400 shadow-xl">
                    <figure>  <BiRefresh className='w-8 h-8 mb-2'></BiRefresh></figure>
                    <motion.div className="">
                        <h2 className="text-[17px] text-center"> Return</h2>
                    </motion.div>
                </motion.div>
                <motion.div className="card rounded-md text-center  items-center  py-2 px-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-xl">
                    <figure>  <FaProductHunt className='w-8 h-8 mb-2'></FaProductHunt></figure>
                    <motion.div className="">
                        <h2 className="text-[17px] text-center">New Product </h2>
                    </motion.div>
                </motion.div>
                <motion.div className="card rounded-md text-center  items-center  py-2 px-5 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 shadow-xl">
                    <figure>  <AiFillSecurityScan className='w-8 h-8 mb-2'></AiFillSecurityScan></figure>
                    <motion.div className="">
                        <h2 className="text-[17px] text-center">Secure </h2>
                    </motion.div>
                </motion.div>


            </motion.div>

        </motion.div >
    );
};

export default Shopings;