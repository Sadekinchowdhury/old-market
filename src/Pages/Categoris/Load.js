import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import UseSeller from '../../UseSeller/UseSeller';

const Load = ({ allcat, setBooking }) => {

    // const [isSeller] = UseSeller(user?.email)

    // const [verifyseller, setVerifyseller] = useState({})

    const { name, price, location, description, originalprice, sellername, postedtime, brand, picture, usedtime, email } = allcat



    const { data: user = {}, refetch } = useQuery({
        queryKey: ['user', email],
        queryFn: async () => {

            const res = await fetch(`https://old-server.vercel.app/user?email=${allcat.email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json()
            return data
        }
    })


    return (

        <div className="card m-3 bg-base-100 border shadow-2xl">
            <figure><img className='w-full h-48 lg:px-3 py-2' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-blue-700 font-semibold'>price: ${price}</p>
                <p className='text-red-600 font-medium'>original price: ${originalprice}</p>
                <p className='text-orange-900'>Used time: {usedtime}</p>
                <p className=''>posted time: {postedtime}</p>

                <div className="grid  grid-cols-1 lg:grid-cols-2 mx-auto gap-x-14  mt-3">


                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img className='' src={user?.photoURL} alt='' />

                        </div>
                        <p className='ml-3 text-sm font-bold'>

                            {

                                user?.role === 'seller' && user?.verify ?
                                    <>
                                        <p> {sellername} <FaCheckCircle></FaCheckCircle></p>
                                    </>
                                    :
                                    <>
                                        {sellername}
                                    </>
                            }




                        </p>
                        <br />


                    </div>

                    <div>
                        {!allcat?.soldStatus ? <>  <label onClick={() => setBooking(allcat)} htmlFor="booking-modal" className="btn btn-outline btn-primary">Book</label>

                        </> :
                            <>
                                <button className=' btn btn-disabled btn-warning'>SoldOut</button>
                            </>


                        }

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Load;