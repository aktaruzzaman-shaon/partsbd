import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderPage from '../OrderPage/OrderPage';
import { useQuery } from 'react-query';

const Product = ({ singleProduct, adminUser }) => {

    const { name, price, _id } = singleProduct;
    const [user] = useAuthState(auth);

    const [singleProductPreviewer, setSingleProductPreviewer] = useState(false);


    //place order 
    const data = { name: name, price: price, _id: _id, mail: user?.email };
    const postOrders = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    // handle prodcut remove
    const handleProductRemove = () => {
        fetch(`http://localhost:5000/deleteProducts/${_id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Id: {_id}</p>

                {adminUser === true ? (<button onClick={handleProductRemove} className='btn'>Remove</button>) : <label htmlFor="edit" onClick={() => {
                    setSingleProductPreviewer(!false);
                }} className="btn btn-primary" >Buy now</label>}
                {
                    adminUser === true && <button className='btn'>EDIT</button>
                }
            </div>
            {
                singleProductPreviewer && <OrderPage singleProduct={singleProduct}></OrderPage>
            }
        </div>
    );
};

export default Product;