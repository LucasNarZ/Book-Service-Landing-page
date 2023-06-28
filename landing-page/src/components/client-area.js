import React from 'react';
import '../css/styles.css';
import { ClientAreaHeader } from './client-area-header';
import { LateralBar } from './lateral-bar';

import { Container } from '@mui/material';

import { useSelector } from 'react-redux';

import { TextField } from '@mui/material';

import { useState } from 'react';

export function ClientArea(props){
    const [userDataPersonal, setUserDataPersonal] = useState(Object.entries(useSelector(state => state.userData[0])));
    const [userDataAddress, setUserDataAddress] = useState(Object.entries(useSelector(state => state.userData[1])))
    const [userDataPayment, setUserDataPayment] = useState(Object.entries(useSelector(state => state.userData[2])))

    return(
        <React.Fragment>
            <section className='client-area'>
                <ClientAreaHeader />
                <div className='main-page'>
                    <LateralBar plan={useSelector(state => state.plan)}/>
                    <div className='info'>
                        {useSelector(state => state.activeBar) === "p1" &&
                        <React.Fragment>
                            <h1>Personal Data</h1>
                            <h2>Account</h2>
                            {userDataPersonal.map(([key, value]) => {
                                return(
                                    <TextField label={key} value={value} disabled sx={{
                                        width: "300px",
                                        marginTop:"30px",
                                    }}/>
                                )
                            })}
                            <h2>Address Data</h2>
                            {userDataAddress.map(([key, value]) => {
                                return(
                                    <TextField label={key} value={value} disabled sx={{
                                        width: "300px",
                                        marginTop:"30px",
                                    }}/>
                                )
                            })}
                            <h2>Payment Data</h2>
                            {userDataPayment.map(([key, value]) => {
                                return(
                                    <TextField label={key} value={value} disabled sx={{
                                        width: "300px",
                                        marginTop:"30px",
                                    }}/>
                                )
                            })}
                        </React.Fragment>
                        }
                        {useSelector(state => state.activeBar) === "p2" && 
                        <React.Fragment>
                            
                        </React.Fragment>
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}