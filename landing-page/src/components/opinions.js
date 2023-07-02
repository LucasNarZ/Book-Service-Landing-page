import React from 'react';
import "../css/styles.css";

import profile1 from '../images/profile-1.png';
import profile2 from '../images/profile-2.png';
import profile3 from '../images/profile-3.png';


import  { Rating }  from '@mui/material'

export function Opinions(props){
    return(
        <React.Fragment>
            <section id='opinions-sec'>
                <h1>Hear What Our Customers Say</h1>
                <div className='opinions'>
                    <div className='opinion'>
                        <p>I was absolutely delighted with the variety of books and the monthly surprise I received through the subscription. Each delivery feels like unwrapping a literary treasure! The selected books always align with my chosen genre, and the quality of the editions is impeccable. I highly recommend this unique experience to all book lovers!</p>
                        <Rating name="read-only" defaultValue={5} readOnly />
                        <img src={profile1} alt='user'/>
                        <p>Marcos R.</p>
                    </div>
                    <div className='opinion'>
                        <p>The book subscription was the best decision I made to expand my literary horizons. Every month, I receive a thoughtfully curated book that never fails to surprise me with its engaging stories and talented authors I may not have discovered on my own. It's a true literary journey, and I can't wait to see which book will arrive at my doorstep next!</p>
                        <Rating name="read-only" defaultValue={5} readOnly />
                        <img src={profile2} alt='user'/>
                        <p>Amanda S.</p>
                    </div>
                    <div className='opinion'>
                        <p>The experience of subscribing to books exceeded my expectations. Alongside receiving an amazing book each month, I was captivated by the additional features offered by the platform. Author interviews and exclusive reviews further enhance my understanding and appreciation of the works. I am truly impressed with the service and can't wait to continue exploring new literary gems!</p>
                        <Rating name="read-only" defaultValue={5} readOnly />
                        <img src={profile3} alt='user'/>
                        <p> Sarah M.</p>
                    </div>
                </div>
                <a href='/plans'><button className='subscribe-btn'>Subscribe</button></a>
            </section>
        </React.Fragment>
    );
}