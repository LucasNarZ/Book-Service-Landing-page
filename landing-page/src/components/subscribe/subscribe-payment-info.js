import React from 'react';

import '../../css/styles.css';

import { Container, TextField, LinearProgress } from '@mui/material';

export function SubscribePayment(props){
    return(
        <React.Fragment>
            <section className='subscribe'>
                <LinearProgress value={66} variant='determinate' sx={{
                    margin:"100px",
                    height: "10px",
                    width: "400px",
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
                        <TextField id="Cardholder Name" className='input1' label="Cardholder Name" variant="outlined" value=" John Doe" required/>
                        <TextField id="Expiration Date" className='input1' value="12/24" label="Expiration Date" variant="outlined" required/>
                        <TextField id="CVV" className='input1' label="CVV" variant="outlined" value="123" required/>
                        <input className='subscribe-btn' type="submit" value="Finish"/>
                    </Container>
                </form>
            </section>
            
        </React.Fragment>
    )
}