import React, { useEffect, useState } from 'react';
import Product from './Product';
import OrderPage from '../OrderPage/OrderPage';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useQuery } from 'react-query';

const Products = () => {

    const [allProducts, setallProducts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/allProducts')
    //         .then(response => response.json())
    //         .then(data => setallProducts(data))
    // }, [])

    const { data, isLoading, refetch } = useQuery('allproducts', () => fetch('http://localhost:5000/allProducts').then(response => response.json()).then(data => setallProducts(data)))

    

    console.log(allProducts);
    return (
        <div>
            <h2>Products</h2>
            <div>
                <input type="text" placeholder="search by name" className="input input-bordered w-full max-w-lg mb-5" />
            </div>
            <div >
                <div className='mx-10 grid grid-cols-3 gap-3'>
                    {
                        allProducts.map(singleProduct => <Product
                            singleProduct={singleProduct}
                            refetch={refetch}
                        ></Product>
                        )
                    }
                </div>
            </div>

        </div>

    );
};

export default Products;