
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllSellers = () => {

    const { data: datatype = [], refetch } = useQuery({
        queryKey: ['datatype'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller')

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
                'content-type': 'application/json'
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
                            <th>Delete user</th>

                        </tr>
                    </thead>
                    <tbody>
                        {datatype?.length &&
                            datatype?.map((data, i) => <tr>
                                <th>{i + 1}</th>


                                <td>{data.name}</td>
                                <td>{data.email}</td>

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