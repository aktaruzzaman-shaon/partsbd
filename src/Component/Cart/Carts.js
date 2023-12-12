import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Carts = () => {

    const [cartItems, setCartItems] = useState([])

    //load cart items from localstorage
    useEffect(() => {
        const cartItems = localStorage.getItem("cartItem");
        const processedCartItems = JSON.parse(cartItems);
        setCartItems(processedCartItems);
    }, [cartItems])

    const handleDeleteCartItem = (id) => {
        const filteredCartItems = cartItems.filter((currentValue) => currentValue._id != id)
        localStorage.setItem("cartItem", JSON.stringify(filteredCartItems))
    }

    return (
        <div className='my-5'>
            {
                cartItems?.map(singleCartItem => <Cart singleCartItem={singleCartItem} handleDeleteCartItem={handleDeleteCartItem}></Cart>)
            }
        </div>
    );
};

export default Carts;