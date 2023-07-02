import React from 'react';

import '../../css/styles.css';

import { Container, TextField, LinearProgress } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/reducer';

import { useState } from 'react';

export function SubscribePayment(props){
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242");
    const [cardholderName, CardHolderName] = useState("436");
    const [expirationDate, ExpirationDate] = useState("12/24");
    const [CVV, setCVV] = useState(123);


    return(
        <React.Fragment>
            <section className='subscribe'>
                <LinearProgress value={66} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    maxWidth: "400px",
                    width:"90vw",
                    borderRadius: "50px",
                    marginY: "0"
                }}/>
                <h2>Payment Info</h2>
                <form>
                    <Container className='content' sx={{
                    display:"flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    alignItems:"center"
                    }}>
                        <TextField id="Card Number" className='input1' label="Card Number"value="4242 4242 4242 4242" variant="outlined" required/>
                        <TextField id="Cardholder Name" className='input1' label="Cardholder Name" variant="outlined" value="John Doe" required/>
                        <TextField id="Expiration Date" className='input1' value="12/24" label="Expiration Date" variant="outlined" required/>
                        <TextField id="CVV" className='input1' label="CVV" variant="outlined" value="123" required/>
                        <input className='subscribe-btn' type="submit" value="Finish" onClick={() => {
                            dispatch(updateUserData({Card_Number:cardNumber, Cardholder_Name: cardholderName, Expitarion_Date: expirationDate, CVV: CVV}))
                            Navigate("/subscribe/finish")
                        }}/>
                    </Container>
                </form>
            </section>
            
        </React.Fragment>
    )
}