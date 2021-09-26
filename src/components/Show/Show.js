import React from 'react';
import Cart from '../Cart/Cart';
import Heroes from '../Heroes/Heroes';
import './Show.css'

const Show = () => {
    return (
        <div className = 'show-hero'>
            <Heroes></Heroes>
            <Cart></Cart>
        </div>
    );
};

export default Show;