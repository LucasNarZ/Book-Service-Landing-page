import React from 'react';
import '../css/styles.css';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { Container } from '@mui/material';

import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';

export function AboutUs(){
    return(
        <React.Fragment>
            <Header />
            <Container className="about-us">
                <h1>About Us</h1>
                <p>Welcome to our online book platform! We are passionate book enthusiasts dedicated to providing a seamless and enjoyable reading experience for all book lovers. Our mission is to connect readers with their favorite books and foster a vibrant community of literary enthusiasts.</p>
                <Container className='about-us-part'>
                    <img src={image1} className='about-us-image' alt=""/>
                    <div>
                        <h2>Who We Are</h2>
                        <p className='about-us-description'>At our book platform, we are a team of avid readers, tech enthusiasts, and book industry experts. We combine our love for books with our expertise in technology to create a platform that makes discovering, accessing, and enjoying physical books a breeze.</p>
                    </div>
                </Container>
                <Container className='about-us-part'>
                    <div>
                        <h2>What We Do</h2>
                        <p className='about-us-description'>Our platform offers a curated collection of physical books across various genres, ensuring there is something for every reader. We partner with publishers, independent authors, and bookstores to bring you a diverse selection of titles to explore and indulge in.</p>
                    </div>
                    <img src={image2} className='about-us-image' alt=""/>
                </Container>
                <h2>Our Philosophy</h2>
                <Container className='about-us-part'>
                    <img src={image3} className='about-us-image' alt=""/>
                    <div>
                        <p className='about-us-description'> <b>1. Embracing the Joy of Reading: </b> We believe that reading is a source of immense joy, enlightenment, and inspiration. We are dedicated to fostering a love for reading by curating a diverse selection of books and creating an engaging platform that celebrates the power of storytelling.</p>
                    </div>
                </Container>
                <Container className='about-us-part'>
                    <div>
                        <p className='about-us-description'> <b>2. Promoting Accessibility and Inclusivity:</b>  We are committed to making books accessible to all readers, regardless of their background or circumstances. We strive to offer an inclusive platform that features a wide range of genres, authors, and perspectives, ensuring that everyone can find books that resonate with them.</p>
                    </div>
                    <img src={image4} className='about-us-image' alt=""/>
                </Container>
                <Container  className='about-us-part'>
                    <img src={image5} className='about-us-image' alt=""/>
                    <div>
                        <p className='about-us-description'> <b>3. Nurturing a Community of Book Lovers: </b> We recognize the importance of building a vibrant community of book enthusiasts. We aim to create a space where readers can connect, share their thoughts, and engage in meaningful conversations about books. We believe that a strong community enhances the reading experience and fosters lifelong connections.</p>
                    </div>
                </Container>   
            </Container>
            <Footer />
        </React.Fragment>
    )
}