import React, { useEffect, useState } from 'react';
import HomePageProduct from './HomePageProduct';

const HomePageProducts = () => {

    const [homePageProducts, sethomePageProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    //loading products by the value of size and page
    useEffect(() => {
        fetch(`http://localhost:5000/homePageProducts?page=${page}&size=${size}`)
            .then(response => response.json())
            .then(data => sethomePageProducts(data));
    }, [page, size])

    //loading sample data on home page
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
        <div >
            <div><p>Products</p></div>
            <div className='mx-10 grid grid-cols-3 gap-3'>
                {
                    homePageProducts.map(homePageProduct => <HomePageProduct
                        homePageProduct={homePageProduct}
                    ></HomePageProduct>
                    )
                }
            </div>


            {/* pagination button */}
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

            {/* See all product */}
            <div className='my-3'><p>See all ...</p></div>
        </div>
    );
};

export default HomePageProducts;