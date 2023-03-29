import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {


    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping

    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summury</h2>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total shiping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Garnd Total: ${grandTotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;