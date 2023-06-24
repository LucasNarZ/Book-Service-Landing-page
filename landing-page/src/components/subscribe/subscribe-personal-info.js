import React from 'react';
import '../../css/styles.css';

import { useState } from 'react';

import { LinearProgress, TextField, Container, InputAdornment, IconButton  } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

export function SubscribePersonal(){
    const [value, setValue] =useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const Navigate = useNavigate();

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
                        <TextField id="outlined-basic" type={showPassword ? 'text' : 'password'} className='input1' label="Password" variant="outlined" inputProps={{
                            endAdornment:(
                                <InputAdornment position="end">
                                <IconButton onClick={() => {setShowPassword(!showPassword)}}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            )
                        }} required/>
                        <input className='subscribe-btn' onClick={() =>{
                            Navigate('/subscribe/address')
                        }} placeholder="Continue"/>
                        </Container>
                    </form>
                    
                </React.Fragment>
                
            </section>
        </React.Fragment>
    )
}