import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const Allusers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()


            return data;

        }
    })

    const haNdlAdminId = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin make successfully')
                }
                console.log(data)
                refetch()
            })
    }

    return (
        <div>
            <h1 className='mb-7 text-3xl text-orange-600 font-bold'>All users </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>
                                make admin
                            </th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.length &&
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>


                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>{user?.role !== 'admin' && <button onClick={() => haNdlAdminId(user._id)} className='btn btn-xs btn-primary'>make admin</button>} </td>

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

export default Allusers;