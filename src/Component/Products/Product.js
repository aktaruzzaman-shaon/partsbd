import React from 'react';

const Product = ({ singleProduct }) => {
    
    const { name, price, _id } = singleProduct;


    //place order 
    const data = { name: name, price: price, _id: _id };
    const postOrders = () => {
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Id: {_id}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => postOrders()} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;