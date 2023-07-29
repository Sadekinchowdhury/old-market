import { useQuery } from '@tanstack/react-query';
import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import { motion } from 'framer-motion';
import { AiFillDelete } from 'react-icons/ai';
import { FaCreditCard, FaTrash } from 'react-icons/fa';

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

    const handlDelete = (id) => {
        fetch(`https://old-server.vercel.app/booking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },

        })

            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    toast(`You are successfully deleted `)

                    refetch()
                }

            })
    }

    return (


        <motion.div initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}>
            {

                booking?.length

                    ?
                    <div

                        className='overflow-x-auto  m-3'>
                        <h1 className='text-2xl pt-5 lg:pl-6 lg:text-left text-center font-bold'>My Orders</h1>

                        <table className="table  w-full">

                            <thead>
                                <tr>
                                    <th className=''>No</th>

                                    <th>Product Name</th>
                                    <th>Quantity</th>

                                    <th>price</th>
                                    <th>Payment</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booking?.map((book, i) => <tr>
                                        <th>{i + 1}</th>

                                        <td className=''>{book.productName}</td>
                                        <td className=''>
                                            {book.quantity}
                                        </td>
                                        <td>${book.price}</td>

                                        <td className=''>
                                            {
                                                book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}><button className='  text-white px-3 py-1  rounded-md hover:bg-gray-700 flex items-center gap-2  bg-primary  '>
                                                    pay
                                                    <FaCreditCard />
                                                </button></Link>
                                            }
                                            {
                                                book.price && book.paid && <button
                                                    className=' py-1 px-3     bg-success rounded-md hover:bg-gray-700 flex items-center gap-2 btn-primary btn-disabled text-green-500'>
                                                    Paid
                                                </button>
                                            }
                                        </td>
                                        <td><button onClick={() => handlDelete(book._id)} className='py-1 px-3 text-white   bg-black rounded-md hover:bg-gray-700 flex items-center gap-2'>Delete <FaTrash /> </button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>



                    </div> : <img className='w-full h-full' src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000" alt="" />
            }



        </motion.div>
    );
};

export default MyOrders;