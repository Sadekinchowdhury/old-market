import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';
import { motion } from 'framer-motion';


const Category = () => {

    const { data: categoryProduct = [], refetch } = useQuery({
        queryKey: ['categoris'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/categoris')
            const data = await res.json()
            console.log(data)
            return data;

        }
    })


    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}
            className='w-11/12 lg:py-5 mx-auto'>

            <div>
                <h1 className='text-2xl text-center font-bold  text-black py-2'>Top Category </h1>
                <hr className='border w-4/12 mx-auto  border-gray-200' />
            </div>

            <div className='grid grid-cols-1  w-full lg:w-8/12  mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 '>

                {
                    categoryProduct.length &&

                    categoryProduct?.map(category =>
                        <CategoryCard
                            key={category._id}
                            category={category}
                        >
                        </CategoryCard>
                    )
                }
            </div>
        </motion.div>
    );
};

export default Category;