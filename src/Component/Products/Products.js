import React, { useEffect, useState } from 'react';
import Product from './Product';
import OrderPage from '../OrderPage/OrderPage';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useQuery } from 'react-query';

const Products = () => {

    const [allProducts, setallProducts] = useState([]);
    const [searchProductName, setsearchProductName] = useState("");


    //for loading all data
    const { data, isLoading, refetch } = useQuery('allproducts', () => fetch('http://localhost:5000/allProducts').then(response => response.json()).then(data => setallProducts(data)))

    //for loading searching single data


    const handleSearchName = () => {
        // const { data: searchProducts, isLoading: searchLoading } = useQuery('allproducts', () => fetch(`http://localhost:5000/allProducts/${searchProductName}`).then(response => response.json()).then(data => setallProducts(data)))

        fetch(`http://localhost:5000/allProducts/${searchProductName}`).then(response => response.json()).then(data => setallProducts(data))


    }



    return (
        <div>
            <h2>Products</h2>
            <div>
                <form>
                    <input type="text" placeholder="search by name" onChange={(e) => setsearchProductName(e.target.value)} className="input input-bordered w-full max-w-lg mb-5" />
                </form>
                <button className='btn' onClick={handleSearchName}>Search</button>
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