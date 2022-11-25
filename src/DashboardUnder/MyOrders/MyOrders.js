import { useQuery } from '@tanstack/react-query';
import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: booking = [], refetch } = useQuery({

        queryKey: ['booking', user?.email],

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
                headers: {
                    'content-type': 'application/json'
                }
            })

            const data = await res.json()

            console.log(data)
            return data;

        }

    })


    return (
        <div>
            <h1 className='mb-7 text-3xl text-orange-600 font-bold'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
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

                                <td>{book.itemname}</td>

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
        </div>
    );
};

export default MyOrders;