import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AmountCalculation from '../OrderPage/AmountCalculation';

const SingleProductDetailsPage = ({ singleProduct }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { img, name, price } = location.state.singleProduct;

    const [productQuantity, setproductQuantity] = useState(1);
    const [amount] = AmountCalculation(productQuantity, price);
    const finalAmountToPay = {finalPriceToPay : amount}

    const decreaeProductQuantity = () => {
        if (productQuantity > 1) {
            setproductQuantity(productQuantity - 1);
        }

    }

    const increseProductQuantity = () => {
        setproductQuantity(productQuantity + 1);
    }


    const handlePaymentPageForward = () => {
        navigate('/payment', { state: { finalAmountToPay } })
    }

    return (
        <div>
            <div className='flex flex-row'>
                <div className='basis-1/2 justify-center'>
                    <img className='h-48 w-full object-contain' src={img}></img>
                </div>
                <div className='justify-center'>
                    <p className='font-extrabold'>{name}</p>
                    <p className='font-extrabold'>{price}</p>

                    <div className='flex justify-center'>
                        <div className='mr-5'><p>Quantity : </p></div>
                        <div>
                            <button onClick={decreaeProductQuantity} className='btn btn-xs mr-5'>-</button>
                            {productQuantity}
                            <button onClick={increseProductQuantity} className='btn btn-xs ml-5'> +</button>
                        </div>
                    </div>

                    <div>
                        <h2 className="card-title mt-5">Amount to pay : {amount}</h2>
                    </div>
                </div>
                <div>
                    <button onClick={handlePaymentPageForward} className='btn'>Buy Now</button>
                </div>
            </div>
            <div>
                
            </div>

        </div>
    );
};

export default SingleProductDetailsPage;