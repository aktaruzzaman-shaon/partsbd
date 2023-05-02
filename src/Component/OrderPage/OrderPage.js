import React from 'react';

const OrderPage = ({ singleProduct }) => {

    const { name, price, _id } = singleProduct;

    return (
        <div>
            <input type="checkbox" id="edit" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="flex">
                        <div className='m-5'>
                            <div className="card w-50 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p>Price: {price}</p>
                                    <p>Id: {_id}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Delivery Information</p>
                            <form>
                                <input type="text" value="shaon" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default OrderPage;