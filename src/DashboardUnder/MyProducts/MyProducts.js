import { useQuery } from '@tanstack/react-query';
import { React, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data = await res.json()
            console.log(data)
            return data;
        }

    })
    return (
        <div>
            <h1>my products</h1>
        </div>
    );
};

export default MyProducts;