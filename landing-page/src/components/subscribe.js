import React from 'react';
import '../css/styles.css';

import { useState } from 'react';

import { LinearProgress, TextField, Container } from '@mui/material';

export function Subscribe(){
    const [value, setValue] =useState(0)

    return(
        <React.Fragment>
            <section className='subscribe'>
                <LinearProgress value={value} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    width: "400px",
                    borderRadius: "50px",
                    marginY: "0"
                }}/>
                { value === 0 && 
                <React.Fragment>
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
                        <TextField id="outlined-basic" className='input1' label="Password" variant="outlined"type="password" required/>
                        <input className='subscribe-btn' onClick={() => {
                            setValue(33)
                        }} value="Continue"/>
                        </Container>
                    </form>
                    
                </React.Fragment>}
                { value === 33 && 
                <React.Fragment>
                    <h2>Shipping Info</h2>
                    <Container className='content' sx={{
                    display:"flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    alignItems:"center"
                    }}>
                    <TextField id="outlined-basic" className='input1' label="Name" variant="outlined"/>
                    <TextField id="outlined-basic" className='input1' label="Email" variant="outlined"/>
                    <TextField id="outlined-basic" className='input1' label="Phone" variant="outlined"/>
                    <TextField id="outlined-basic" className='input1' label="Password" variant="outlined"/>
                    <button className='subscribe-btn' onClick={() => {
                        setValue(66)
                    }}>Continue</button>
                </Container>
                </React.Fragment>}
                { value === 66 && 
                <React.Fragment>
                    <h2>Account Info</h2>
                    <Container className='content' sx={{
                    display:"flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    alignItems:"center"
                    }}>
                    <TextField id="outlined-basic" className='input1' label="Name" variant="outlined"/>
                    <TextField id="outlined-basic" className='input1' label="Email" variant="outlined"/>
                    <TextField id="outlined-basic" className='input1' label="Phone" variant="outlined"/>
                    <TextField id="outlined-basic" className='input1' label="Password" variant="outlined"/>
                    <button className='subscribe-btn'>Continue</button>
                </Container>
                </React.Fragment>}
            </section>
        </React.Fragment>
    )
}