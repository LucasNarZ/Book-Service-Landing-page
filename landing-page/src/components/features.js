import React from 'react';
import "../css/styles.css";


import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'

export function Features(props){
    return (
        <React.Fragment>
            <section id='features'>
                <h1>Features</h1>
                <div className='feature'>
                    <img src={image1} className='feature-image'/>
                    <p className='feature-description'>Discover a new way to immerse yourself in the world of physical books. Our book subscription platform offers unique features that go beyond simple purchasing. With a range of personalized options, you can explore a wide selection of literary genres and receive the most exciting releases directly to your doorstep on a monthly basis.</p>
                </div>
                <div className='feature'>
                    <p className='feature-description'>Unleash the excitement of the unexpected with our Surprise Genre Plan. Through the "Features" tab, you'll embark on a thrilling literary journey curated exclusively for you. Each month, our team of book enthusiasts handpicks a surprise book from the genre of your choice. Whether you're a fan of spine-tingling mysteries, heartwarming romance, or mind-bending science fiction, our Surprise Genre Plan ensures you'll receive captivating reads tailored to your preferences. Dive into unexplored narratives, discover new authors, and let the element of surprise elevate your reading experience.</p>   
                    <img src={image2} className='feature-image'/>
                </div>
                <div className='feature'>
                    <img src={image3} className='feature-image'/>
                    <p className='feature-description'>We've simplified the process of discovering and acquiring new books. You can easily browse through curated collections, explore thematic book lists, and discover hidden gems recommended by our team of avid readers. Whether you're a fan of thrillers, historical fiction, or non-fiction, our platform provides a seamless experience for expanding your literary horizons.</p>
                </div>
                <button className='subscribe-btn'>Subscribe</button>
            </section>
        </React.Fragment>
    )
}