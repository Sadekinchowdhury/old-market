
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { Fa } from 'react-icons/fa';
import { HiCheck } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AllSellers = () => {

    const { data: datatype = [], refetch } = useQuery({
        queryKey: ['datatype'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/users/seller', {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })

            const data = await res.json()

            return data;
        },


    })

    const handlDelete = id => {



        fetch(`https://old-server.vercel.app/users/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(deletData => {
                if (deletData.deletedCount > 0) {
                    toast(`You are successfully deleted sellers`)
                    refetch()
                }

            })


    }
    const hadlVerify = id => {
        fetch(`https://old-server.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('verify make successfully')
                    refetch()
                }


            })
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}>
            <h1 className='mb-7 text-3xl text-orange-600 font-bold'>All sellers </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead className='text-center'>

                        <th>No</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>verify seller</th>
                        <th>Delete user</th>


                    </thead>
                    <tbody className='text-center'>
                        {datatype?.length &&
                            datatype?.map((data, i) => <tr>
                                <th>{i + 1}</th>


                                <td>
                                    {
                                        data?.verify === true
                                            ? <>

                                                <div>

                                                    <p>
                                                        {data.name} <HiCheck className='inline-block'></HiCheck>
                                                    </p>


                                                </div>

                                            </> : <>
                                                {data.name}
                                            </>
                                    }


                                </td>
                                <td>{data.email}</td>

                                <td>{data?.verify !== true
                                    ? <>


                                        <button onClick={() => hadlVerify(data._id)} className='btn btn-xs btn-primary'>verify</button></>

                                    :
                                    <>
                                        <button className='btn btn-sm'>verifed</button>

                                    </>

                                }
                                </td>

                                <td>
                                    <button onClick={() => handlDelete(data._id)} className='btn btn-sm'>Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default AllSellers;