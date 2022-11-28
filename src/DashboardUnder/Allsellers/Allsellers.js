
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { Fa } from 'react-icons/fa';
import { HiCheck } from "react-icons/hi";
import { Link } from 'react-router-dom';

const AllSellers = () => {

    const { data: datatype = [], refetch } = useQuery({
        queryKey: ['datatype'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller', {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })

            const data = await res.json()
            console.log(data)
            return data;
        },


    })

    const handlDelete = id => {

        console.log('delete')

        fetch(`http://localhost:5000/users/${id}`, {
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
        fetch(`http://localhost:5000/users/${id}`, {
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
                console.log(data)

            })
    }

    return (
        <div>
            <h1 className='mb-7 text-3xl text-orange-600 font-bold'>All sellers </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>verify seller</th>
                            <th>Delete user</th>

                        </tr>
                    </thead>
                    <tbody>
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
        </div>
    );
};

export default AllSellers;