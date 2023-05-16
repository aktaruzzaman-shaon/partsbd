import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MlPmmJ0Iao4xBhnUD2NuduyQGwSllQ9Gvo0OJTAzT08znNjLni1sjdk51SFGvrhB3yh7PnT5Tit35v5Td0k1pUp00uZ0jUYQ4');

const PaymentPage = ({ singleProduct }) => {

    const { name, price, _id, img } = singleProduct;
    
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
            <Elements stripe={stripePromise} options={options} >
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default PaymentPage;