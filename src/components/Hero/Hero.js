import React from 'react';
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

const Hero = (props) => {
    const {name, age, picture, designation, salary} = props.hero;

    const element = <FontAwesomeIcon className = 'icon' icon={faShoppingCart} />
    const facebook = <FontAwesomeIcon className = 'social-icon' icon={faFacebook} />
    const twitter = <FontAwesomeIcon className = 'social-icon' icon={faTwitter} />
    return (
        <div className = 'hero'>
            <img className='hero-img' src={picture} alt="" />
            <div className="hero-details">
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h4>Designation: {designation}</h4>
            <p>Salary: $ {salary}</p>
            </div>
            <button onClick = {()=> props.handleCart(props.hero)} className = 'cart-btn' > {element} Pay Salary </button>
            <br />
            <a target = '_blank' href="https://facebook.com/owhab.cse">{facebook}</a>
            <a target = '_blank' href="https://twitter.com/abdul_owhab">{twitter}</a>
        </div>
    );
};

export default Hero;