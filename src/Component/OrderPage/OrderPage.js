import React, { useState } from 'react';
import AmountCalculation from './AmountCalculation';
import { useNavigate } from 'react-router-dom';

const OrderPage = ({ singleProduct }) => {

    const { name, price, _id } = singleProduct;
    const [productQuantity, setproductQuantity] = useState(1);
    const [amount] = AmountCalculation(productQuantity, price);
    const navigate = useNavigate();

    const decreaeProductQuantity = () => {
        if (productQuantity > 1) {
            setproductQuantity(productQuantity - 1);
        }

    }

    const increseProductQuantity = () => {
        setproductQuantity(productQuantity + 1);
    }

    const paymentPageHandler = () => {
        navigate('/payment');
    }


    return (
        <div>
            <input type="checkbox" id="edit" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="flex justify-center">
                        <div className='p-5 mr-5'>
                            <div className="card w-50 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p>Price: {price}</p>
                                    <p>Id: {_id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderPage;