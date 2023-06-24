import React from 'react';

import '../../css/styles.css';

import { Container, TextField, LinearProgress } from '@mui/material';

export function SubscribePayment(props){
    return(
        <React.Fragment>
            <LinearProgress value={66} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    width: "400px",
                    borderRadius: "50px",
                    marginY: "0"
            }}/>
            <h2>Account Info</h2>
            <form>
                <Container className='content' sx={{
                display:"flex",
                flexDirection: "column",
                rowGap: "20px",
                alignItems:"center"
                }}>
                <TextField id="outlined-basic" className='input1' label="Name" variant="outlined" required/>
                <TextField id="outlined-basic" className='input1' label="Email" variant="outlined" type="email" required/>
                <TextField id="outlined-basic" className='input1' label="Phone" variant="outlined" type="phone" required/>
                <TextField id="outlined-basic" className='input1' label="Password" variant="outlined" required/>
                <input className='subscribe-btn' onClick={() => {
                    
                }} placeholder="Continue"/>
                </Container>
            </form>
        </React.Fragment>
    )
}