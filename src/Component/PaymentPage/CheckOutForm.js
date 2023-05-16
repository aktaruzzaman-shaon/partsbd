import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
    }

    return (

        <div className='justify-center	'>

            <div className=" card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <PaymentElement />
                        <button type="submit" disabled={!stripe || !elements}>
                            Pay
                        </button>
                        {/* Show error message to your customers */}
                        {errorMessage && <div>{errorMessage}</div>}
                    </form>
                </div>
            </div>
        </div>


    );
};

export default CheckOutForm;