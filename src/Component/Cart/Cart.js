import React from 'react';

const Cart = ({ singleCartItem, handleDeleteCartItem }) => {
    const { _id, name, price, stock, img } = singleCartItem;

    return (
        <div className="card border max-w-md card-side border-sky-500  bg-base-100 mx-auto shadow-xl  mb-2 ">
            <figure className='pl-5'><img src={img} alt={name} /></figure>
            <div className="card-body">
                <p className="card-title ml-12">{name}</p>
                <p>Price : {price}</p>
                <p>Quantity : {stock}</p>
                <div>
                    <button className="btn btn-primary" onClick={() => handleDeleteCartItem(_id)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;