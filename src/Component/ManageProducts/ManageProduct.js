import React from 'react';

const ManageProduct = ({ singleProduct, refetch }) => {

    const { name, price, _id } = singleProduct;

    // handle prodcut remove
    const handleProductRemove = () => {
        fetch(`http://localhost:5000/deleteProducts/${_id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => refetch())
    }

    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Id: {_id}</p>
                <button onClick={handleProductRemove} className='btn'>Remove</button>
                <button className='btn'>EDIT</button>

            </div>
        </div>
    );
};

export default ManageProduct;