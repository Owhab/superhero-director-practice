import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import './Heroes.css'

const Heroes = () => {

    const [heroes, setHeroes] = useState([]);

    useEffect(()=>{
        fetch('./heroes.json')
        .then(res => res.json())
        .then(data => setHeroes(data))
    },[])
    
    return (
        
        <div className = 'heroes-container'>
            
            {
                heroes.map(hero => <Hero hero = {hero}></Hero>)
            }
                     
            
        </div>
    );
};

export default Heroes;