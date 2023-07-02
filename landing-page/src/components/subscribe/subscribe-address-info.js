import React from 'react';

import '../../css/styles.css';

import { useNavigate } from 'react-router-dom';

import { Container, TextField, LinearProgress } from '@mui/material';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/reducer';

export function SubscribeAddress(props){
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [streetName, setStreetName] = useState("Main Street");
    const [buildingNumber, setBuildingNumber] = useState(436);
    const [addressLine2, setAddressLine2] = useState("Apt 2B");
    const [city, setCity] = useState("San Francisco - CA");
    const [ZIP, setZIP] = useState(94101);

    return(
        <React.Fragment>
            <section className='subscribe'>
                <LinearProgress value={33} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    maxWidth: "400px",
                    width:"90vw",
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
                        <TextField id="Street name" className='input1' label="Street name" value="Main Street" variant="outlined" type="text" required onChange={(e) => {setStreetName(e.target.value)}}/>
                        <TextField id="Building number" type="number" className='input1' value="436" label="Building number" variant="outlined" required onChange={(e) => {setBuildingNumber(e.target.value)}}/>
                        <TextField id="Address line 2 (optional)" value="Apt 2B" className='input1' label="Address line 2 (optional)" variant="outlined" type="text" onChange={(e) => {setAddressLine2(e.target.value)}}/>
                        <TextField id="city" value="San Francisco - CA" className='input1' label="City" variant="outlined" required type="text" onChange={(e) => {setCity(e.target.value)}}/>
                        <TextField id="ZIP" value="94101" className='input1' label="ZIP" variant="outlined" required onChange={(e) => {setZIP(e.target.value)}}/>
                        <input className='subscribe-btn' type="submit" onClick={() => {
                            dispatch(updateUserData({Street_Name: streetName, Building_Number: buildingNumber, Address_Line_2: addressLine2, City:city, ZIP:ZIP}))
                            navigate('/subscribe/payment')
                        }} value="Continue"/>
                    </Container>
                </form>
            </section>
            
        </React.Fragment>
    )
}