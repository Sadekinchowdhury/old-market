import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
    console.log(users)

    return (
        <section>
            {product.advertise || !product.soldStatus ?

                <div className="card rounded-none border border-gray-300 bg-base-300   shadow-2xl">
                    <div className='flex justify-center items-center pt-3'>
                        <img className='w-2/3  h-32' src={picture} alt="" />
                    </div>

                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-blue-700 font-semibold'>price: ${price}</p>
                        <p className='text-red-600 font-medium'>original price: ${originalprice}</p>
                        <p className='text-orange-900'>Used time: {usedtime}</p>
                        <p className=''>posted time: {postedtime}</p>

                        <div className="flex pt-2  gap-3 justify-between">


                            <div className="avatar">
                                <div className="w-8 h-8 rounded-full relative">
                                    <img className='' src={user?.photoURL} alt='' />
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
                                        <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded">Book</label>
                                    </> :
                                        <>
                                            <Link to='/login'> <button className='bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded'>
                                                Book
                                            </button></Link>
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