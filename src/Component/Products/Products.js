import React, { useEffect, useState } from 'react';
import Product from './Product';
import OrderPage from '../OrderPage/OrderPage';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useQuery } from 'react-query';

const Products = () => {

    const [allProducts, setallProducts] = useState([]);
    const [searchProductName, setsearchProductName] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    //loading products by the value of size and page
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts?page=${page}&size=${size}`)
            .then(response => response.json())
            .then(data => setallProducts(data));
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(response => response.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 6);
                setPageCount(pages);
            });
    }, [])

    return (
        <div>
            <h2>Products</h2>

            {/* Searchbar */}
            <div>
                <form>
                    <input type="text" placeholder="search by name" onChange={(e) => setsearchProductName(e.target.value)} className="input input-bordered w-full max-w-lg mb-5" />
                </form>
            </div>

            {/* Loadproducts */}
            <div >
                <div className='mx-10 grid grid-cols-3 gap-3'>
                    {
                        allProducts.filter((item) => {
                            return searchProductName.toLowerCase() === "" ? item : item.name.toLowerCase().includes(searchProductName)
                        }).map(singleProduct => <Product
                            singleProduct={singleProduct}
                        ></Product>
                        )
                    }
                </div>
            </div>

            {/* //pagination */}
            <div className="btn-group">
                {
                    [...Array(pageCount).keys()].map(number => <button
                        className={page === number ? 'btn-active' : ''}
                        onClick={() => setPage(number)}
                    >{number + 1}</button>)
                }

                <select onChange={e => setSize(e.target.value)}>
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div >
    );
};

export default Products;