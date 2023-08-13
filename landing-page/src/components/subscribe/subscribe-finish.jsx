import React from "react";
import '../../css/styles.css';

import { Container, LinearProgress } from "@mui/material";

import { useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";

export function SubscribeFinish(props){
    const navigate = useNavigate();

    return(
        <React.Fragment>
            <Container className="finish-section" maxWidth="sm" sx={{
                display: "flex",
                flexDirection:"column",
                alignItems:"center",
                height:"100vh",
            }}>
                <LinearProgress value={100} variant='determinate' sx={{
                    margin:"90px",
                    height: "10px",
                    maxWidth: "400px",
                    width:"90vw",
                    borderRadius: "50px",
                    marginBottom: "40px"
                }}/>
                <h1>Congratulations!</h1>
                <h2>You just acquired the {useSelector(state => state.plan)}</h2>
                <button className='subscribe-btn' onClick={() => {
                    navigate('/client-area')
                }}>Continue</button>
            </Container>
        </React.Fragment>
    )
}