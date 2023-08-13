import React from 'react';
import '../css/styles.css';



export function Hero(props){
    return(
        <React.Fragment>
            <section id='hero'>
                <h1>Discover a World of Physical Books</h1>
                <p>Step into a world where imagination knows no bounds, a captivating subscription service designed for bibliophiles who crave the tactile experience of physical books.Our platform offers an extraordinary adventure, curating an array of captivating narratives and literary wonders that will transport you to distant lands and unfamiliar realms. </p>
                <a href='/plans'><button className='subscribe-btn'>Subscribe</button></a>
            </section>
        </React.Fragment>
    )
}