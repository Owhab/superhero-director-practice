import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className = 'cart'>
            <h2>Cart Section</h2>
            <div className= 'cart-content'>
                <h3>Total Heroes: {}</h3>
                <h2>Total Salary: {}</h2>
            </div>
            
        </div>
    );
};

export default Cart;