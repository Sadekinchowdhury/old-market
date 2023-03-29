import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

    const { data: categoryProduct = [], refetch } = useQuery({
        queryKey: ['categoris'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/categoris')
            const data = await res.json()
            return data;
        }
    })


    return (
        <div className='lg:w-4/5 lg:py-5 mx-auto'>
            < div className='mt-9 '>
                <h1 className='text-2xl text-center font-bold  text-white py-2'>Top Category </h1>
                <hr />
            </div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10  mb-9'>

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
        </div>
    );
};

export default Category;