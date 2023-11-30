import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [allProducts, setallProducts] = useState([]);
    const [searchProductName, setsearchProductName] = useState("");
    const [category, setCategory] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    //loading products by the value of size and page and category
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts?page=${page}&size=${size}&category=${category}`)
            .then(response => response.json())
            .then(data => setallProducts(data));
    }, [page, size, category])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(response => response.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 6);
                setPageCount(pages);
            });
    }, [])

    //handle categorytical search
    const categorySearchHandler = (categoryName) => {
        // let newArrayProducts = [...allProducts]
        // let filteredCategory = newArrayProducts.filter((item) => {
        //     return item.name.toLowerCase().includes(categoryName.toLowerCase())
        // })
        // setallProducts(filteredCategory)
        setCategory(categoryName)

    }

    return (
        <div>

            {/* Searchbar */}
            <div className='mt-3'>
                <form>
                    <input type="text" placeholder="search by name" onChange={(e) => setsearchProductName(e.target.value)} className="input input-bordered w-full max-w-lg mb-5" />
                </form>
            </div>

            {/* Loadproducts  by category*/}
            <div className='flex flex-row'>
                <div className="navbar bg-base-200 basis-1/4 shadow-md bg-slate-300 mr-3 justify-center h-3/4">
                    <div className="flex-none">
                        <ul className="menu menu-vertical p-5">
                            <li onClick={() => categorySearchHandler("car")} ><a>Car Parts</a></li>
                            <li onClick={() => setsearchProductName("car_tools")}><a>Tools And hardware</a></li>
                            <li onClick={() => setsearchProductName("car_seat")}><a>Hybrid car seat</a></li>
                            <li onClick={() => setsearchProductName("car_glass")}><a>Heavy veichele glass</a></li>
                        </ul>
                    </div>
                </div>

                {/* Pagination */}
                <div className='mx-10 grid md:grid-cols-3 sm: grid-cols-1 gap-3'>
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
            <div className='m-5'>
                <div className="btn-group">
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            className={page === number ? 'btn-active' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }

                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5" selected >5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div >
    );
};

export default Products;