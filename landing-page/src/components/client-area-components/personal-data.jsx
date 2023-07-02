import '../../css/styles.css';

import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';

import React from 'react';

export function PersonalData({ userData, activeBar }){
    const userDataPersonal = Object.entries(userData[0]);
    const userDataAddress = Object.entries(userData[1]);
    const userDataPayment = Object.entries(userData[2]);

    return(
        <React.Fragment>
            {activeBar === "p1" &&
                <React.Fragment>
                    <h1>Personal Data</h1>
                    <h2>Account</h2>
                    {userDataPersonal.map(([key, value]) => {
                        return(
                            <TextField label={key} value={value} disabled sx={{
                                width: "300px",
                                m:"auto",
                                marginTop:"30px",
                            }}/>
                        )
                    })}
                    <h2>Address Data</h2>
                    {userDataAddress.map(([key, value]) => {
                        return(
                            <TextField label={key} value={value} disabled sx={{
                                width: "300px",
                                m:"auto",
                                marginTop:"30px",
                            }}/>
                        )
                    })}
                    <h2>Payment Data</h2>
                    {userDataPayment.map(([key, value]) => {
                        return(
                            <TextField label={key} value={value} disabled sx={{
                                width: "300px",
                                m:"auto",
                                marginTop:"30px",
                            }}/>
                        )
                    })}
                </React.Fragment>
            }
        </React.Fragment>
    )
}