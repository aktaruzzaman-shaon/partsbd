import React, { createContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Product = ({ singleProduct, adminUser, refetch }) => {

    const { name, price, _id, img } = singleProduct;
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const productContext = createContext({ singleProduct });

    const [paymentPreviewer, setPaymentPreviewer] = useState(false);

    const handlePaymentPageForward = () => {
        navigate('/payment', { state: { singleProduct } })
    }

    const handleSingleProductViewer = () => {
        navigate('/singleProductDetails', { state: { singleProduct } })
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
        <div className="card w-50 bg-base-100 shadow-xl mt-10">
            <div className="card-body hover:scale-110 " onClick={handleSingleProductViewer} >
                <div><img className=' object-cover h-48 w-96' src={img}></img></div>
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <button className='btn border-none text-black bg-orange-300 hover:bg-orange-500' onClick={handleSingleProductViewer}>Details</button>
            </div>
        </div>
    );
};

export default Product;