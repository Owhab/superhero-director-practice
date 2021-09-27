import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Show.css'

const Show = () => {

    const [heroes, setHeroes] = useState([]);
    const [cart, setCart] = useState([]);

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    useEffect(()=>{
        fetch('./heroes.json')
        .then(res => res.json())
        .then(data => setHeroes(data))
    },[])

    const handleCart = (hero) =>{
        const newCart = [...cart, hero]
        setCart(newCart)
        console.log(newCart);
    }
  
    return (
        <div className = 'show-hero'>
            <div className="heroes-container">
            {
                heroes.map(hero => <Hero
                    key = {hero.name}
                    handleCart = {handleCart}
                    hero = {hero}></Hero>)
            }
            </div>

            <div className="cart-container">
            <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Show;