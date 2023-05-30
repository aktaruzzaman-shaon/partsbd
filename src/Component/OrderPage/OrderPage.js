import React, { useState } from 'react';
import AmountCalculation from './AmountCalculation';
import { useNavigate } from 'react-router-dom';

const OrderPage = ({ singleProduct }) => {

    const { name, price, _id } = singleProduct;

    return (
        <div>
            <h2>This is porduct view page</h2>
        </div >
    );
};

export default OrderPage;