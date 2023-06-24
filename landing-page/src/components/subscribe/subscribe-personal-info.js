import React from 'react';
import '../../css/styles.css';

import { useState } from 'react';

import { LinearProgress, Container, TextField } from '@mui/material';



import { useNavigate } from 'react-router-dom';

export function SubscribePersonal(){
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateEmail = (email) => {
        if (email.length < 3) {
            return false;
          }
        
          var indice = email.indexOf("@");
          
          if (indice >= 1 && indice <= email.length - 2) {
            return true;
          }
        
    }


    
    return(
        <React.Fragment>
            <section className='subscribe'>
                <LinearProgress value={0} variant='determinate' sx={{
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
                        <TextField  className='input1' label="Name" variant="outlined"  error={name == "" && error == true} required onChange={(e) => {setName(e.target.value)}}/>
                        <TextField className='input1' label="Email" variant="outlined" type="email" error={(email == "" || !validateEmail(email)) && error == true} required onChange={(e) => {setEmail(e.target.value)}}/>
                        <TextField  className='input1' label="Phone" variant="outlined" error={phone == "" && error == true} type="number" onChange={(e) => {setPhone(e.target.value)}} required/>
                        <TextField  type={showPassword ? 'text' : 'password'} className='input1' error={password == "" && error == true} label="Password" variant="outlined" required onChange={(e) => {setPassword(e.target.value)}}/>
                        <input className='subscribe-btn' type="submit" onClick={() =>{
                            if(name && email && password && phone)navigate('/subscribe/address')
                            else alert("Fill all statements");setError(true)
                        }} value="Continue"/>
                        </Container>
                    </form>
                </React.Fragment>
            </section>
        </React.Fragment>
    )
}