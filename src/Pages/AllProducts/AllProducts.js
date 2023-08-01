import React, { useContext, useEffect, useState } from 'react';
import Products from './Products';
import PagaNation from './ProductsPagNation';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../ShopingCart/Spinner';
import SearchBar from './SerchBar';


const AllProducts = () => {


    const { loading, searchQuery } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://old-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [postperPage, setpostperPage] = useState(8)

    const lastpostindex = currentPage * postperPage;
    const firstpostindex = lastpostindex - postperPage;
    const currentpost = products.slice(firstpostindex, lastpostindex)

    // const [searchQuery, setSearchQuery] = useState('');

    // const handleSearchChange = (query) => {
    //     setSearchQuery(query);
    // };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log(filteredProducts)


    return (
        <div className='min-h-screen'>
            {
                loading ? <Spinner /> : <>

                    {/* <div className='py-14 flex items-center justify-center'>
                        <SearchBar onChange={handleSearchChange} />
                    </div> */}

                    <div className='grid   grid-cols-1 lg:grid-cols-4 py-10 gap-10 w-11/12 mx-auto'>
                        {
                            filteredProducts.map(product =>
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
                    </div></>
            }
        </div>
    );
};

export default AllProducts;