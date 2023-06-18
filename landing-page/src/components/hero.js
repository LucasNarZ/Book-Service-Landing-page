import React from 'react';
import '../css/styles.css';

import heroImage from '../images/hero-image.jpg'


export function Hero(props){
    return(
        <React.Fragment>
            <section id='hero'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam odio, facilisis a malesuada eleifend, aliquet eget metus. Nulla luctus sem aliquet enim tristique accumsan. Nullam ultricies blandit est, laoreet pulvinar eros ultricies sit amet. In hac habitasse platea dictumst. Donec sit amet augue at nulla vehicula condimentum. Pellentesque ut faucibus magna. Ut diam erat, bibendum id volutpat id, viverra ac sapien.</p>
                <button className='subscribe-btn'>Subscribe</button>
            </section>
        </React.Fragment>
    )
}