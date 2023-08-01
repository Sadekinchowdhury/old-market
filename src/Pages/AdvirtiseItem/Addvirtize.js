import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
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
    console.log(products)
    return (
        <section className=' lg:w-11/12 mx-auto'>

            <div className='py-5'>

                <p className='text-2xl text-center text-black font-bold p-3 '> Recent Product </p>
                <hr className='border mx-auto pl-4 border-black w-2/5 ' />

            </div>
            <div className='grid m-3 gap-7 h-1/2  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {

                    products?.slice(0, 8).map(product =>

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