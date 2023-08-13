import React from 'react';
import '../../css/styles.css';

import { LinearProgress, Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { updateUserData, resetUserData } from '../../redux/reducer';




export function SubscribePersonal(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(resetUserData())
        dispatch(updateUserData({Name:data.name, Email:data.email, Password:data.password, Phone:data.phone}))
        navigate('/subscribe/address')
    }

    return(
        <React.Fragment>
            <section className='subscribe'>
                <LinearProgress value={0} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    maxWidth: "400px",
                    width:"90vw",
                    borderRadius: "50px",
                    marginY: "0"
                }}/>
                <React.Fragment>
                    <h2>Account Info</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Container className='content' sx={{
                        display:"flex",
                        flexDirection: "column",
                        rowGap: "20px",
                        alignItems:"center"
                        }}>
                        <TextField  className='input1' label="Name" variant="outlined"  error={!!errors.name} {...register("name", {required:true})}/>
                        <TextField className='input1' label="Email" variant="outlined" error={!!errors.email}{...register("email", {required:true, pattern:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/})}/>
                        <TextField  className='input1' label="Phone" variant="outlined" error={!!errors.phone}{...register("phone", {required:true, pattern:/^[0-9]{7}$/})}/>
                        <TextField  type="password" className='input1'label="Password" error={!!errors.password} {...register("password", {required:true})} />
                        <input className='subscribe-btn' type="submit" value="Continue"/>
                        </Container>
                    </form>
                </React.Fragment>
            </section>
        </React.Fragment>
    )
}