import React from 'react';

import '../../css/styles.css';

import { useNavigate } from 'react-router-dom';

import { Container, TextField, LinearProgress, InputAdornment, IconButton } from '@mui/material';

import { Visibility, VisibilityOff} from '@mui/icons-material';

import { useState } from 'react';

export function SubscribeAddress(props){
    const navigate = useNavigate();

    return(
        <React.Fragment>
            <section className='subscribe'>
                <LinearProgress value={33} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    width: "400px",
                    borderRadius: "50px",
                    marginY: "0"
                }}/>
                <h2>Address Info</h2>
                <form>
                    <Container className='content' sx={{
                    display:"flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    alignItems:"center"
                    }}>
                        <TextField id="Street name" className='input1' label="Street name" value="Main Street" variant="outlined" type="text" required/>
                        <TextField id="Building number" type="number" className='input1' value="436" label="Building number" variant="outlined" required/>
                        <TextField id="Address line 2 (optional)" value="Apt 2B" className='input1' label="Address line 2 (optional)" variant="outlined" type="text"/>
                        <TextField id="city" value="San Francisco - CA" className='input1' label="City" variant="outlined" required type="text"/>
                        <TextField id="ZIP" value="94101" className='input1' label="ZIP" variant="outlined" required />
                        <input className='subscribe-btn' type="submit" onClick={() => {
                            navigate('/subscribe/payment')
                        }} value="Continue"/>
                    </Container>
                </form>
            </section>
            
        </React.Fragment>
    )
}