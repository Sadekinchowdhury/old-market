import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddvirtisCard = ({ product, setBooking }) => {
    const { name, price, location, description, originalprice, sellername, postedtime, brand, picture, usedtime, email } = product

    const { user } = useContext(AuthContext)

    const { data: users = {}, refetch } = useQuery({
        queryKey: ['user', email],
        queryFn: async () => {

            const res = await fetch(`https://old-server.vercel.app/user?email=${product?.email}`);
            const data = await res.json()
            refetch()
            return data;
        }
    })
    const [open, setOpen] = useState(false)

    const hovemouse = () => {
        setOpen(!open)
    }

    return (
        <section onMouseEnter={hovemouse}
            onMouseLeave={hovemouse}
            className={`bg-white shadow-2xl ${open && 'border border-red-500 transition duration-500 ease-in-out'}`}
        >
            {product.advertise || !product.soldStatus ?

                <div className={`card rounded-md  border   shadow-[40px] `}>
                    <div className='flex pt-2 justify-center items-center '>
                        <img className='w-11/12 mx-auto  h-48' src={picture} alt="" />
                    </div>

                    <div className={`pt-3 px-3 pb-2  ${open ? 'block' : 'hidden'}`}>
                        <h2 className="card-title uppercase">{name}</h2>
                        <div className='flex  items-center justify-between gap-3 py-3'>
                            <div>

                                <p className='text-[13px] font-bold'>Old price: ${price}</p>

                                <p className='text-[13px] font-bold'>Used time: {usedtime}</p>
                                <p className='text-[13px] font-bold'>posted time: {postedtime}</p>
                            </div>
                            <div>

                                <p className='text-xl font-semibold line-through'>${price}</p>
                                <p className='text-xl font-semibold'>${originalprice}</p>
                            </div>
                        </div>

                        <div className="flex pt-2  gap-2 justify-between">


                            <div className="avatar">
                                <div className="w-8 h-8 rounded-full  relative">
                                    <img className='border-black border-[1px]' src={user?.photoURL} alt='' />
                                    {
                                        users?.role === 'seller' && users?.verify ? <FaCheckCircle color='green' className='absolute top-0 right-1' /> : <></>
                                    }

                                </div>
                                <p className='ml-3 text-sm font-bold'>
                                    {sellername}

                                </p>
                                <br />


                            </div>

                            <div>
                                {
                                    user?.email ? <>
                                        <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="flex gap-2 items-center px-2 py-1 border border-gray-300 cursor-pointer font-semibold hover:border-blue-700 hover:border-2 hover:bg-black hover:text-white transition duration-200 hover:scale-105"><FaShoppingCart /> Add cart</label>
                                    </> :
                                        <>
                                            <Link className='flex gap-2 items-center px-2 py-1 border border-gray-300 cursor-pointer' to='/login'>
                                                <FaShoppingCart />
                                                Add cart
                                            </Link>
                                        </>

                                }



                            </div>
                        </div>
                    </div>

                </div>
                : <><h1>Nothing...</h1></>
            }



        </section>
    );
};

export default AddvirtisCard;