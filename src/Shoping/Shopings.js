import React from 'react';
import { FaProductHunt, FaShoppingCart } from 'react-icons/fa';
import { AiFillSecurityScan } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'

const Shopings = () => {
    return (
        <div className='m-4  items-center justify-center'>
            <div className='grid lg:w-2/3 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 gap-3 '>

                <div className="card rounded-none text-center justify-center items-center  p-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 shadow-xl">
                    <figure>  <FaShoppingCart className='w-14 h-14 mb-2'></FaShoppingCart></figure>
                    <div className="">
                        <h2 className="card-title text-center">Free Shopping</h2>
                    </div>
                </div>
                <div className="card rounded-none text-center justify-center items-center  p-5  bg-gradient-to-r from-cyan-200 to-cyan-400 shadow-xl">
                    <figure>  <BiRefresh className='w-14 h-14 mb-2'></BiRefresh></figure>
                    <div className="">
                        <h2 className="card-title text-center"> Return</h2>
                    </div>
                </div>
                <div className="card rounded-none text-center justify-center items-center  p-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-xl">
                    <figure>  <FaProductHunt className='w-14 h-14 mb-2'></FaProductHunt></figure>
                    <div className="">
                        <h2 className="card-title text-center">New Product </h2>
                    </div>
                </div>
                <div className="card rounded-none text-center justify-center items-center  p-5 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 shadow-xl">
                    <figure>  <AiFillSecurityScan className='w-14 h-14 mb-2'></AiFillSecurityScan></figure>
                    <div className="">
                        <h2 className="card-title text-center">Secure </h2>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Shopings;