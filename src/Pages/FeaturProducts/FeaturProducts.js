import React, { useEffect, useState } from 'react';

const FeaturProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://old-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-4'>
            {
                products.slice(0, 8).map(product =>
                    <div>

                        <p>{product.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default FeaturProducts;