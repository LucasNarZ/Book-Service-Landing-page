import React, { useState, useEffect } from 'react';
import '../css/styles.css';

import  bookIcon  from '../icons/icon_book.png';

import MenuIcon from '@mui/icons-material/Menu';

export function Header(props){
    const [width, setWidth] = useState(window.innerWidth);
    const [colapseMenu, setColapseMenu] = useState(false)

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <React.Fragment>
            <header id='header'>
                {width > 600 && 
                <React.Fragment>
                    <img src={bookIcon} className='logo'/>
                    <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/plans'>Plans</a></li>
                        <li><a href='/about-us'>About Us</a></li>
                    </ul>
                    </nav>
                </React.Fragment>}
                {width <= 600 && 
                <React.Fragment>
                    <MenuIcon fontSize="large" sx={{
                        m:"10px",
                        cursor:"pointer", 
                    }} onClick={() => {
                        setColapseMenu(!colapseMenu)
                    }}/>    
                </React.Fragment>}
                {console.log(colapseMenu)}
                {colapseMenu === true && 
                <React.Fragment>
                    <nav className='nav-bar-burger'>
                    <ul className='nav-list'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/plans'>Plans</a></li>
                        <li><a href='/about-us'>About Us</a></li>
                    </ul>
                    </nav>
                </React.Fragment>}
                <a href='/plans'><button className='subscribe-btn'>Subscribe</button></a>
            </header>
        </React.Fragment>
    )
}