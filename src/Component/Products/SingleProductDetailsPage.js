import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleProductDetailsPage = ({ singleProduct }) => {
    const location = useLocation();
    const { img, name, price } = location.state.singleProduct;

    return (
        <div>
            <div className='flex flex-row'>
                <div className='basis-1/2 justify-center'>
                    <img className='h-48 w-full object-contain' src={img}></img>
                </div>
                <div>
                    <div className='justify-items-center'>
                        <p className='font-extrabold'>{name}</p>
                        <p className='font-extrabold'>{price}</p>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default SingleProductDetailsPage;