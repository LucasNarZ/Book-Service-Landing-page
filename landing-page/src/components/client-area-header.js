import React from 'react';
import '../css/styles.css';

import  bookIcon  from '../icons/icon_book.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export function ClientAreaHeader(props){
    return(
        <React.Fragment>
            <header className='client-area-header'>
                <img src={bookIcon} alt='logo'/>
                <AccountCircleIcon className='person-icon'/>
            </header>
            
        </React.Fragment>
    )
}