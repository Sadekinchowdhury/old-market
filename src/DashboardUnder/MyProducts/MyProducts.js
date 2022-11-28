import { useQuery } from '@tanstack/react-query';
import { React, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)


    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            console.log(data)
            return data;
        }

    })
    const handlDeleteProducts = id => {

        console.log('delete')

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`You are successfully deleted product`)
                    refetch()
                }
                console.log(data)
            })


    }


    const handleAdvertiseProduct = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    toast.success('Product Advertise Successful.')
                    refetch()
                }

            })
    }

    return (
        <div>
            <h1 className='mb-7 text-3xl text-orange-600 font-bold'>MY products </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>price</th>
                            <th>date</th>
                            <th>sale status</th>
                            <th>Delete Product</th>
                            <th>add advirtised </th>

                        </tr>
                    </thead>
                    <tbody>
                        {products?.length &&
                            products?.map((product, i) => <tr>
                                <th>{i + 1}</th>


                                <td>{product.name}</td>
                                <td> ${product.price}</td>
                                <td>{product.postedtime}</td>
                                <td> {
                                    product?.soldStatus ? <> <p>sold</p>
                                    </> :
                                        <>
                                            <p>unsold</p>
                                        </>

                                } </td>
                                <td>
                                    <button onClick={() => handlDeleteProducts(product._id)} className='btn btn-sm'>Delete</button>
                                </td>
                                <td>
                                    {
                                        product?.advertise && !product?.soldStatus ? <>
                                            <button onClick={() => handleAdvertiseProduct(product._id)} className='btn btn-primary btn-sm'>add advirtised</button>
                                        </> :

                                            <>
                                                <button onClick={() => handleAdvertiseProduct(product._id)}

                                                    className='btn btn-primary 
                                                
                                                btn-sm'>add advirtised</button>
                                            </>



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

export default MyProducts;