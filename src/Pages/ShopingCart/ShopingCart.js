import React, { useContext, useState } from 'react';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Checkbox } from 'antd';
import { AuthContext } from '../../Context/AuthProvider';

import ShopingCartDetails from './ShopingCartDetails';
import { useQuery } from '@tanstack/react-query';

const ShopingCart = () => {
    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState(1)

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



    const handleIncrease = () => {
        setCart(cart + 1)
    };

    const handleDecrease = () => {
        if (cart >= 2) {
            setCart(cart - 1)
        }
    };



    return (
        <div className='min-h-screen'>
            <div className='flex items-center py-10 w-10/12 mx-auto justify-between p-4'>
                <div className='flex gap-4 items-center'>
                    <Checkbox />
                    Select All cart
                </div>
                <div className='flex gap-3 items-center'>
                    Delete
                    <AiOutlineDelete size={30} />
                </div>
            </div>
            <div className='py-10'>
                {
                    booking?.length &&
                    booking.map(book =>
                        <ShopingCartDetails

                            book={book}
                            key={book._id}
                            handleDecrease={handleDecrease}
                            handleIncrease={handleIncrease}
                            cart={cart}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ShopingCart;