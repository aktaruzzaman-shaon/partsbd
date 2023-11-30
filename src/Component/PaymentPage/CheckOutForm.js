import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

const CheckOutForm = ({ price, singleProduct }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(" ");
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/createPaymentIntent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                price: price
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        // 4242424242424242
        //make order for successfull payment
        fetch('http://localhost:5000/makeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(
                singleProduct
            )
        })
            .then(res => res.json())
            .then(data => console.log(data, 'Successfully placed order'))

        setCardError(error?.message || '')
    }

    return (

        <div className='justify-center	'>

            <div className=" card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },

                            }}
                        />
                        <button className='btn btn-success mt-5' type="submit" disabled={!stripe || !clientSecret}>
                            Pay
                        </button>
                    </form>
                    {
                        cardError && <p>{cardError}</p>
                    }
                </div>
            </div>
        </div>


    );
};

export default CheckOutForm;