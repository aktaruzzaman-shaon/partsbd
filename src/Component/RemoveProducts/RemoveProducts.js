import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';



const RemoveProducts = () => {
    const [allProducts, setallProducts] = useState([]);
    const adminUser = true;

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(response => response.json())
            .then(data => setallProducts(data))
    }, [])
    return (
        <div>
            <p>This is removeProducts</p>

            <div >
                <div className='mx-10 grid grid-cols-3 gap-3'>
                    {
                        allProducts.map(singleProduct => <Product
                            singleProduct={singleProduct}
                            adminUser={adminUser}
                        ></Product>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default RemoveProducts;