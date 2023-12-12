import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ManageProduct from './ManageProduct';
import Loading from '../Shared/Loading/Loading';

const ManageProducts = () => {

    //this all products load for admin
    const [allProducts, setallProducts] = useState([])

    const { data, isLoading, refetch } = useQuery('manageProducts', () => fetch('http://localhost:5000/allProducts').then(res => res.json()).then(data => setallProducts(data)))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div >
                <div className='mx-10 grid grid-cols-3 gap-3'>
                    {
                        allProducts.map(singleProduct => <ManageProduct
                            singleProduct={singleProduct}
                            refetch={refetch}
                        ></ManageProduct>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;