import React, { useEffect, useState } from 'react';
import HomePageProduct from './HomePageProduct';

const HomePageProducts = () => {

    const [homePageProducts, sethomePageProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

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

                {/* pagination button */}
                <div className="btn-group">
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            className={page === number ? 'btn-active' : ''}
                            onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                </div>
            </div>

            {/* See all product */}
            <div className='my-3'><p>See all ...</p></div>
        </div>
    );
};

export default HomePageProducts;