import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {


    const { data: categoryProduct = [], refetch } = useQuery({

        queryKey: ['categoris'],
        queryFn: async () => {
            const res = await fetch('https://old-server.vercel.app/categoris')
            const data = await res.json()
            refetch()
            return data;
        }
    })


    return (
        <div>
            < div className='mt-9'>

                <h1 className='text-2xl text-center font-bold text-orange-500 py-2'>Your favourite category</h1>
            </div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 px-28 mb-9'>

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