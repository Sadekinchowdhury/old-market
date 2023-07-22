import { useQuery } from '@tanstack/react-query';
import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: booking = [], refetch } = useQuery({

        queryKey: ['booking', user?.email],

        queryFn: async () => {

            const res = await fetch(`https://old-server.vercel.app/booking?email=${user?.email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })

            const data = await res.json()


            return data;

        }

    })


    return (
        <div className=''>
            <h1 className='text-2xl pt-5 lg:pl-6 lg:text-left text-center font-bold'>My Orders</h1>
            {
                booking?.length ? <div className="overflow-x-auto  m-3">
                    <table className="table  w-full">

                        <thead>
                            <tr>
                                <th className=''>No</th>
                                <th>Name</th>
                                <th>ItemName</th>

                                <th>price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.length &&
                                booking?.map((book, i) => <tr>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className='flex gap-3'>

                                            <div className="avatar">
                                                <div className="w-5 rounded-full ring ring-primary ">
                                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                                </div>

                                            </div>
                                            <div>
                                                {book.userName}
                                            </div>
                                        </div>
                                    </td>

                                    <td className=''>{book.itemname}</td>

                                    <td>{book.price}</td>

                                    <td>
                                        {
                                            book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}><button className='btn btn-primary px-5'>
                                                pay
                                            </button></Link>
                                        }
                                        {
                                            book.price && book.paid && <button
                                                className='btn btn-primary btn-disabled text-green-500'>
                                                Paid
                                            </button>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                    : <img className='w-full h-full' src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000" alt="" />
            }

        </div>
    );
};

export default MyOrders;