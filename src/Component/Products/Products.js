import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [allProducts, setallProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts/')
            .then(response => response.json())
            .then(data => setallProducts(data))
    }, [])
    return (
        <div>
            <h2>Products</h2>
            <div >
                <div className='mx-10 grid grid-cols-3 gap-3'>{
                    allProducts.map(singleProduct => <Product
                        singleProduct={singleProduct}
                    ></Product>
                    )
                }</div>
            </div>
        </div>
    );
};

export default Products;