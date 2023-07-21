import React from 'react';
import { FaProductHunt, FaShoppingCart } from 'react-icons/fa';
import { AiFillSecurityScan } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'
import SignUp from './../Shared/SignUp/SignUp';

const Shopings = () => {
    return (
        <div className=''>
            <div className='grid  mx-auto grid-cols-1  gap-3 '>

                <div className="card rounded-xl text-center  items-center  p-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 shadow-xl">
                    <figure><FaShoppingCart className='w-14 h-14 mb-2'></FaShoppingCart></figure>
                    <div className="">
                        <h2 className="card-title text-center">Free Shopping</h2>
                    </div>
                </div>
                <div className="card rounded-xl text-center  items-center  p-5  bg-gradient-to-r from-cyan-200 to-cyan-400 shadow-xl">
                    <figure>  <BiRefresh className='w-14 h-14 mb-2'></BiRefresh></figure>
                    <div className="">
                        <h2 className="card-title text-center"> Return</h2>
                    </div>
                </div>
                <div className="card rounded-xl text-center  items-center  p-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-xl">
                    <figure>  <FaProductHunt className='w-14 h-14 mb-2'></FaProductHunt></figure>
                    <div className="">
                        <h2 className="card-title text-center">New Product </h2>
                    </div>
                </div>
                <div className="card rounded-xl text-center  items-center  p-5 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 shadow-xl">
                    <figure>  <AiFillSecurityScan className='w-14 h-14 mb-2'></AiFillSecurityScan></figure>
                    <div className="">
                        <h2 className="card-title text-center">Secure </h2>
                    </div>
                </div>


            </div>
            {/* <div className='grid grid-cols-1 border'>
                <div className='p-3  gap-5 border border-gray-300'>
                    <div className='flex w-10/12 mx-auto justify-between items-center'>
                        <FaShoppingCart size={30} className=' mb-2'></FaShoppingCart>
                        <p className='text-xl font-bold'>Free Shoping</p>
                    </div>

                </div>
                <div className='flex p-3  justify-center gap-5 border border-gray-300'>
                    <BiRefresh size={30} className='mb-2'></BiRefresh>
                    <p>Return</p>
                </div>
                <div className='flex p-3  justify-center gap-5 border border-gray-300'>
                    <FaShoppingCart size={30} className=' mb-2'></FaShoppingCart>
                    <p>New Product</p>
                </div>
                <div className='flex p-3  justify-center gap-5 border border-gray-300'>
                    <FaProductHunt size={30} className='  mb-2'></FaProductHunt>
                    <p>Secure</p>
                </div>
            </div> */}
        </div >
    );
};

export default Shopings;