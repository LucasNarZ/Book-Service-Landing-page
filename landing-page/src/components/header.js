import React from 'react';
import '../css/styles.css';

import  bookIcon  from '../icons/icon_book.png';

export function Header(props){
    return(
        <React.Fragment>
            <header id='header'>
                <img src={bookIcon} className='logo'/>
                <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#'>Plans</a></li>

                        <li><a href='/about-us'>About Us</a></li>
                    </ul>
                </nav>
                <a href='/plans'><button className='subscribe-btn'>Subscribe</button></a>
            </header>
        </React.Fragment>
    )
}