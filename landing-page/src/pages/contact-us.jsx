import '../css/styles.css';

import  bookIcon  from '../icons/icon_book.png';

import { useNavigate } from 'react-router-dom';

import { TextField } from '@mui/material';

export function ContactUs(props){
    const cNavigate = useNavigate();

    const handleSubmit = event => {
        alert("message send with success")
        cNavigate('/');
    }

    return(
        <section id='contact-us-section'>
            <img src={bookIcon} alt="book-icon" />
            <div className="form">
                <p className='send-a-message'>Send a message</p>
                <form onSubmit={handleSubmit}>
                    <TextField className="outlined-basic" label="Name" variant="outlined" required />
                    <TextField className="outlined-basic" label="Email" variant="outlined"  required type='email' />
                    <TextField className="outlined-basic" label="Subject" variant="outlined"  required />
                    <label>Message</label><br/>
                    <textarea name="" id="" cols="38" rows="3" required></textarea>
                    <input type="submit" className='submit' value="Send"/>
                </form>
            </div>
        </section>
    )
}