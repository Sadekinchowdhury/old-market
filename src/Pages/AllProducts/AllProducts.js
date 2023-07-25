import React, { useEffect, useState } from 'react';
import Products from './Products';
import PagaNation from './ProductsPagNation';


const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [postperPage, setpostperPage] = useState(8)

    const lastpostindex = currentPage * postperPage;
    const firstpostindex = lastpostindex - postperPage;
    const currentpost = products.slice(firstpostindex, lastpostindex)

    return (
        <div>
            <div className='grid   grid-cols-1 lg:grid-cols-4 py-10 gap-10 w-11/12 mx-auto'>
                {
                    currentpost.map(product =>
                        <Products
                            product={product}
                            key={product._id}
                        />
                    )
                }

            </div>
            <div className='py-7 flex justify-center items-center'>
                <PagaNation
                    totalpost={products.length}
                    postperPage={postperPage}

                    setcurrentPage={setCurrentPage}

                />
            </div>
        </div>
    );
};

export default AllProducts;