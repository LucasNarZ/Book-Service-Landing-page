import React from 'react';
import '../css/styles.css';

import  bookIcon  from '../icons/icon_book.svg';

export function Header(props){
    return(
        <React.Fragment>
            <header id='header'>
                <img src={bookIcon} className='logo'/>
                <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <li>Home</li>
                        <li>Plans</li>
                        <li>Past Books</li>
                        <li>About Us</li>
                    </ul>
                </nav>
                <button className='subscribe-btn'>Subscribe</button>
            </header>
        </React.Fragment>
    )
}