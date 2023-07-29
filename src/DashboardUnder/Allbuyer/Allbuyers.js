import { assert } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const AllBuyers = () => {

    const { data: BuyersData = [], refetch } = useQuery({
        queryKey: ['BuyersData'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/users/buyer')

            const data = await res.json()

            return data;
        },


    })

    const handlDeleteBuyers = id => {

        console.log('delete')

        fetch(`https://old-server.vercel.app/users/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`You are successfully deleted buyers`)
                    refetch()
                }
                console.log(data)
            })


    }



    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}>
            {
                BuyersData.length ? <div>
                    <h1 className='mb-7 text-3xl text-orange-600 font-bold text-center'>All  Buyers </h1>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead className='text-center'>
                                <th>No</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Delete user</th>


                            </thead>
                            <tbody className='text-center'>
                                {BuyersData?.length &&
                                    BuyersData?.map((data, i) => <tr>
                                        <td>{i + 1}</td>


                                        <td>{data?.name}</td>
                                        <td>{data?.email}</td>


                                        <td>
                                            <button onClick={() => handlDeleteBuyers(data._id)} className='btn btn-sm'>Delete</button>
                                        </td>

                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                    : <img className='w-full h-full' src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000" alt="" />
            }
        </motion.div>
    );
};

export default AllBuyers;