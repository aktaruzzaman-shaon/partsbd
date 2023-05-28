import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderPage from '../OrderPage/OrderPage';
import { useQuery } from 'react-query';
import PaymentPage from '../PaymentPage/PaymentPage';
import { useNavigate } from 'react-router-dom';

const Product = ({ singleProduct, adminUser, refetch }) => {

    const { name, price, _id, img } = singleProduct;
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
                                                                                                                              
    const [singleProductPreviewer, setSingleProductPreviewer] = useState(false);
    const [paymentPreviewer, setPaymentPreviewer] = useState(false);

    const handlePaymentPageForward = () => {
        navigate('/payment', { state: { singleProduct } })
        console.log("from handle payment previewer")
    }

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

    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <div className="card-body">
                <div><img src={img}></img></div>
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Id: {_id}</p>
                <label htmlFor="edit" onClick={() => {
                    setSingleProductPreviewer(!false);
                }} className="btn btn-primary" >Details</label>
                <button onClick={handlePaymentPageForward} className='btn'>Buy Now</button>
            </div>
            {
                singleProductPreviewer && <OrderPage singleProduct={singleProduct}></OrderPage>
            }
            {/* {
                paymentPreviewer && <PaymentPage singleProduct={singleProduct}></PaymentPage>
            } */}
        </div>
    );
};

export default Product;