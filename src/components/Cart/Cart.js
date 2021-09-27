import React from 'react';
import './Cart.css'

const Cart = props => {
    const {cart} = props;
    let salary = 0;
    for(const hero of cart){
        salary = salary + hero.salary;
        
    }
    
    
     



    return (
        <div className = 'cart'>
           <h2>Cart Section</h2>
            <div className= 'cart-content'>
                <h3>Total Heroes: {props.cart.length}</h3>
                <h2>Total Salary: $ {salary}</h2>               

            </div>
            <div className = 'hero-list'>
            {
                cart.map(name => <li 
                key = {name.name}
                > {name.name}
                 </li> )
            }
            </div>

            
        </div>
    );
};

export default Cart;