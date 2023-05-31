import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import AmountCalculation from '../OrderPage/AmountCalculation';

const stripePromise = loadStripe('pk_test_51MlPmmJ0Iao4xBhnUD2NuduyQGwSllQ9Gvo0OJTAzT08znNjLni1sjdk51SFGvrhB3yh7PnT5Tit35v5Td0k1pUp00uZ0jUYQ4');

const PaymentPage = () => {
    const location = useLocation();
    const { finalPriceToPay } = location.state.finalAmountToPay;

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
            <div>
                <p>This is payment page</p>
                <div>
                    <div>
                        <h2 className="card-title mt-5">Amount to pay : {finalPriceToPay}</h2>
                    </div>
                    <Elements stripe={stripePromise} options={options} >
                        <CheckOutForm price={finalPriceToPay} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;