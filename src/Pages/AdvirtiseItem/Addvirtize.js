import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AddvirtisCardModal from '../AddvirtisCardModal/AddvirtisCardModal';
import AddvirtisCard from '../AdvirtisCard/AddvirtisCard';

const Addvirtize = () => {

    const [booking, setBooking] = useState([]);

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://old-server.vercel.app/advertise/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })


    }, [])
    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['advertise', 'product'],
    //     queryFn: async () => {
    //         const res = await fetch('https://old-server.vercel.app/advertise/product', {
    //             headers: {
    //                 'content-type': 'application/json',
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json()
    //         refetch()
    //         return data;
    //     }
    // })

    return (
        <section>

            <div>

                <p className='text-6xl text-orange-500 font-bold text-center py-6'> Addvirtise </p>
            </div>
            <div className='grid gap-5 h-1/2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.length &&
                    products?.map(product =>

                        <AddvirtisCard
                            key={product._id}
                            product={product}
                            setBooking={setBooking}
                        >
                        </AddvirtisCard>

                    )
                }
            </div>
            {
                booking &&

                <AddvirtisCardModal
                    booking={booking}
                    setBooking={setBooking}
                >

                </AddvirtisCardModal>

            }
        </section>
    );
};

export default Addvirtize;