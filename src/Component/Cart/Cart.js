import React, { useEffect, useState } from 'react';

const Cart = () => {

    const [cartItems, setCartItems] = useState([])


    //load cart items from localstorage
    useEffect(() => {
        const cartItems = localStorage.getItem("cartItem");
        const processedCartItems = JSON.parse(cartItems);
        console.log(processedCartItems.length);
    }, [])

    return (
        <div>
            This is cart
        </div>
    );
};

export default Cart;