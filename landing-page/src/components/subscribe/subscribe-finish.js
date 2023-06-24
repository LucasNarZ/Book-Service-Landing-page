import React from "react";
import '../../css/styles.css';

import { Container, LinearProgress } from "@mui/material";

import { changePlan } from "../../redux/reducer.js";

import { useSelector } from 'react-redux';

export function SubscribeFinish(props){
    return(
        <React.Fragment>
            <Container className="finish-section" maxWidth="sm" sx={{
                display: "flex",
                flexDirection:"column",
                alignItems:"center",
            }}>
                <LinearProgress value={100} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    width: "400px",
                    borderRadius: "50px",
                    marginY: "0"
                }}/>
                <h1>Congratulations!</h1>
                <h2>You just acquired the {useSelector(state => state.plan.Plan)}</h2>
            </Container>
        </React.Fragment>
    )
}