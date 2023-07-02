import React from 'react';
import '../css/styles.css';

import  { Container, Accordion }  from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export function Questions(){
    return(
        <React.Fragment>
            <Container id="questions" maxWidth="sm" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <h1>Frequently Asked Questions</h1>
                <Accordion className="accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    >
                        <h2>What is the subscription duration for physical book deliveries?</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>The subscription duration for physical book deliveries is typically monthly. Each month, you will receive a carefully curated selection of books based on your preferences.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className="accordion">
                        <h2>Can I choose the genre or type of books I want to receive?</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Yes, absolutely! During the signup process, you can specify your preferred genres or types of books. We take your preferences into account while curating the monthly book selection to ensure you receive books that align with your reading tastes.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className="accordion">
                        <h2>Are there any additional charges for shipping?</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>No, there are no additional charges for shipping. The cost of shipping is included in your subscription fee, so you don't have to worry about any hidden costs.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className="accordion">
                        <h2>What if I receive a book that I already own or have read?</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>We understand that sometimes you may receive a book that you already own or have read. In such cases, we offer a hassle-free exchange policy. Simply reach out to our customer support, and we'll be happy to exchange the book for an alternative title from our collection.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className="accordion">
                        <h2>What if I receive a book that I already own or have read?</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>We understand that sometimes you may receive a book that you already own or have read. In such cases, we offer a hassle-free exchange policy. Simply reach out to our customer support, and we'll be happy to exchange the book for an alternative title from our collection.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className="accordion">
                        <h2>Do you offer international shipping?</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>At the moment, we offer shipping within EUA. However, we are actively working on expanding our services to reach book lovers around the world. Stay tuned for updates on international shipping!</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className="accordion">
                        <h2>How do I update my personal information or preferences?</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>You can easily update your personal information and preferences by logging into your account on our website. From there, you can access your profile and make the desired changes. If you need any assistance, our support team is always ready to help.</p>
                    </AccordionDetails>
                </Accordion>
                <a href='/plans'><button className='subscribe-btn'>Subscribe</button></a>
            </Container>
        </React.Fragment>
    )
}