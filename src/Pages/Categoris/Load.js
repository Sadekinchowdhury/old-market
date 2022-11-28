import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import UseSeller from '../../UseSeller/UseSeller';

const Load = ({ allcat, setBooking }) => {

    // const [isSeller] = UseSeller(user?.email)

    const [verifyseller, setVerifyseller] = useState({})

    const { name, price, location, description, originalprice, sellername, postedtime, brand, picture, usedtime, email } = allcat



    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller')

            const data = await res.json()
            console.log(data)
            return data;
        },


    })

    // const { data: user = {}, refetch } = useQuery({

    //     queryKey: ['user'],
    //     queryFn: async () => {

    //         const res = await fetch(`http://localhost:5000/user?email=${email}`);
    //         const data = await res.json();

    //         return data;
    //     }
    // })

    // console.log(user)

    return (

        <div className="card bg-base-100 border shadow-xl">
            <figure><img className='w-full h-40 px-3 py-2' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-blue-700 font-semibold'>price: ${price}</p>
                <p className='text-red-600 font-medium'>original price: ${originalprice}</p>
                <p className='text-orange-900'>Used time: {usedtime}</p>
                <p className=''>posted time: {postedtime}</p>

                <div className="grid  grid-cols-1 lg:grid-cols-2 mx-auto gap-x-14  mt-3">


                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img className='' src="https://placeimg.com/192/192/people" alt='' />

                        </div>
                        <p className='ml-3 text-sm font-bold'>


                            <>
                                <p className='text-blue-600'> verified</p>
                            </>
                            <>
                                {sellername}
                            </>




                        </p>
                        <br />


                    </div>

                    <div>
                        {!allcat?.soldStatus ? <>  <label onClick={() => setBooking(allcat)} htmlFor="booking-modal" className="btn btn-info btn-sm">Book now</label>
                        </> :
                            <>
                                <button className=' btn btn-disabled btn-warning'>SoldOut</button>
                            </>


                        }

                    </div>
                </div>
            </div>

        </div>
        // <div className="card border shadow-xl">

        //     <div className='h-30'>
        //         <img src={picture} alt="" className="rounded-xl w-full " />
        //     </div>

        //     <div className="card-body">
        // <h2 className="card-title text-center"> {name} </h2>
        // <p className='text-blue-700 font-semibold'>price: ${price}</p>
        // <p className='text-red-600 font-medium'>original price: ${originalprice}</p>
        // <p className='text-orange-900 font-mono'>Used time: {usedtime}</p>
        // <p className=''>posted time: {postedtime}</p>

        //     </div>
        // <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 mb-1">


        //     <div className="avatar">
        //         <div className="w-12 rounded-full">
        //             <img src="https://placeimg.com/192/192/people" alt='' />

        //         </div>
        //         <p>
        //             {sellername}
        //         </p>
        //     </div>

        //     <div>
        //         <label onClick={() => setBooking(allcat)} htmlFor="booking-modal" className="btn btn-info btn-sm">Book now</label>
        //     </div>
        // </div>
        // </div>
    );
};

export default Load;