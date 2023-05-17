import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import AmountCalculation from '../OrderPage/AmountCalculation';

const stripePromise = loadStripe('pk_test_51MlPmmJ0Iao4xBhnUD2NuduyQGwSllQ9Gvo0OJTAzT08znNjLni1sjdk51SFGvrhB3yh7PnT5Tit35v5Td0k1pUp00uZ0jUYQ4');

const PaymentPage = () => {
    const location = useLocation();
    const { name, price, _id, img } = location.state.singleProduct;

    const [productQuantity, setproductQuantity] = useState(1);
    const [amount] = AmountCalculation(productQuantity, price);

    const decreaeProductQuantity = () => {
        if (productQuantity > 1) {
            setproductQuantity(productQuantity - 1);
        }

    }

    const increseProductQuantity = () => {
        setproductQuantity(productQuantity + 1);
    }


    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <div>
            <p>This is payment page</p>
            <div className='flex justify-center'>
                <div className='p-5 mr-5 w-50'>
                    <div className="card w-50 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>Price: {price}</p>
                            <p>Id: {_id}</p>
                        </div>
                        <div className='flex justify-center'>
                            <div className='mr-5'><p>Quantity : </p></div>
                            <div>
                                <button onClick={decreaeProductQuantity} className='btn btn-xs mr-5'>-</button>
                                {productQuantity}
                                <button onClick={increseProductQuantity} className='btn btn-xs ml-5'> +</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="card-title mt-5">Amount to pay : {amount}</h2>
                    </div>
                    <Elements stripe={stripePromise} options={options} >
                        <CheckOutForm price={price} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;