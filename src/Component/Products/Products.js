import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const [allProducts, setallProducts] = useState([]);
    const [searchProductName, setsearchProductName] = useState("");
    const [category, setCategory] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    useEffect(() => {
        fetch('partsbd-server.vercel.app/productCount')
            .then(response => response.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 6);
                setPageCount(pages);
            });
    }, [])

    //loading products by the value of size and page and category
    const { data, isLoading, refetch } = useQuery('allProducts', () => fetch(`http://localhost:5000/allProducts?page=${page}&size=${size}&category=${category}`).then(res => res.json()).then(data => setallProducts(data)))


    useEffect(() => {
        refetch()
    }, [page, size, category])



    // handle categorytical search
    const categorySearchHandler = (categoryName) => {
        setCategory(categoryName)
    }

    // Loading state
    if (isLoading) {
        return <Loading></Loading>
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
            <div className='flex flex-row '>
                <div className="navbar basis-1/4 justify-center h-52 md:w-42 mt-8">
                    <div className="flex-none border rounded-md border-green-500">
                        <ul className="menu menu-vertical p-5">
                            <li onClick={() => categorySearchHandler("allproducts")}><a>All products</a></li>
                            <li onClick={() => categorySearchHandler("car_tools")} ><a>Car Parts</a></li>
                            <li onClick={() => setsearchProductName("car")}><a>Tools And hardware</a></li>
                            {/* <li onClick={() => setsearchProductName("car_seat")}><a>Hybrid car seat</a></li>
                            <li onClick={() => setsearchProductName("car_glass")}><a>Heavy veichele glass</a></li> */}
                        </ul>
                    </div>
                </div>

                {/* Pagination */}
                <div className='mx-10 grid md:grid-cols-3 sm: grid-cols-1 gap-3 sm:w-52 md:w-auto'>
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
                <div className="join">

                    {
                        [...Array(pageCount).keys()].map(number => <button
                            className={`join-item btn mx-1 text-black ${page === number ? "btn-active" : 'bg-gray-300'}`}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }


                    <select className='select max-w-xs bg-gray-300' onChange={e => setSize(e.target.value)}>
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