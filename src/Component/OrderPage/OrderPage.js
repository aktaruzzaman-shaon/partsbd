import React, { useState } from 'react';

const OrderPage = ({ singleProduct }) => {

    const { name, price, _id } = singleProduct;
    const [productQuantity, setproductQuantity] = useState(0);

    const decreaeProductQuantity = () => {
        console.log("Decrese");
        setproductQuantity(productQuantity - 1);
        console.log(productQuantity)
    }
    const increseProductQuantity = () => {
        console.log("Increase");
        setproductQuantity(productQuantity + 1);
        console.log(productQuantity);
    }


    return (
        <div>
            <input type="checkbox" id="edit" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="flex justify-center">
                        <div className='p-5 mr-5'>
                            <div className="card w-50 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p>Price: {price}</p>
                                    <p>Id: {_id}</p>
                                </div>
                                <div>
                                    <button onClick={decreaeProductQuantity} className='btn btn-xs mr-5'>-</button>
                                    {productQuantity}
                                    <button onClick={increseProductQuantity} className='btn btn-xs ml-5'> +</button>
                                </div>
                            </div>

                        </div>

                        <div className='ml-5'>
                            {/* Delivery inforamtio form */}
                            {/* <form>
                                <p className='font-extrabold'>Delivery Information</p>
                                <div className='flex flex-col'>
                                    <input type="text" placeholder="Name" className="input mb-2 input-bordered w-full max-w-xs" />
                                    <input type="text" placeholder="Address" className="input mb-2 input-bordered w-full max-w-xs" />
                                    <input type="text" placeholder="Phone Number" className="input mb-2 input-bordered w-full max-w-xs" />
                                    <button className="btn">Payment</button>
                                </div>
                            </form> */}


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderPage;