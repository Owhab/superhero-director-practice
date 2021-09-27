import React from 'react';
import './Hero.css'

const Hero = (props) => {
    const {name, age, picture, designation, salary} = props.hero;
    console.log(props)


    return (
        <div className = 'hero'>
            <img className='hero-img' src={picture} alt="" />
            <div className="hero-details">
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h4>Designation: {designation}</h4>
            <p>Salary: {salary}</p>
            </div>
            <button onClick = {()=> props.handleCart(props.hero)} className = 'cart-btn' >Add to Cart</button>
        </div>
    );
};

export default Hero;