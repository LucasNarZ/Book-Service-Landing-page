import React from 'react';
import '../css/styles.css';
import { ClientAreaHeader } from './client-area-header';
import { LateralBar } from './lateral-bar';

import { Container } from '@mui/material';

import { useSelector } from 'react-redux';


export function ClientArea(props){
    return(
        <React.Fragment>
            <section className='client-area'>
                <ClientAreaHeader />
                <div className='main-page'>
                    <LateralBar plan={useSelector(state => state.plan)}/>
                    <div className='info'>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}