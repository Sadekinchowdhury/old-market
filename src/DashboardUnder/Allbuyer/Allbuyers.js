import { assert } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllBuyers = () => {

    const { data: BuyersData = [], refetch } = useQuery({
        queryKey: ['BuyersData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer')

            const data = await res.json()
            console.log(data)
            return data;
        },


    })



    return (
        <div>
            <h1 className='mb-7 text-3xl text-orange-600 font-bold text-center'>All sellers </h1>
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
                        {BuyersData?.length &&
                            BuyersData?.map((data, i) => <tr>
                                <th>{i + 1}</th>


                                <td>{data.name}</td>
                                <td>{data.email}</td>


                                <td>
                                    <button className='btn btn-sm'>Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;