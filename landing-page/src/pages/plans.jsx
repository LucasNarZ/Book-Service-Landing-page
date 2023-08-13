import React from 'react';
import '../css/styles.css';

import { changePlan } from "../redux/reducer.js";
import { useDispatch } from 'react-redux';

import CheckIcon from '@mui/icons-material/Check';
import { Container } from '@mui/material';
export function Plans(){
    const dispatch = useDispatch();
    const choosePlan = (plan) => {
        if(plan === "surprise"){
            dispatch(changePlan("Surprise Genre Book Plan"));
        }
        else if(plan === "especific"){
            dispatch(changePlan("Select Your Book Plan"));
        }
    }

    const selectPlan = ["Personalized Selection", "Flexibility and Control", "Extensive Book Selection", "Tailored Reading Experience", "Community Interaction"]
    const surprisePlan = ["Expert Curation", "Surprise Element", "Discover Hidden Gems", "Genre Exploration", "Surprise Gifts"]

    return(
        <React.Fragment>
            <div className="plans" >
                <Container className='plan'>
                    <h2>Select Your Book Plan</h2>
                    <p>Our Choose Your Own Book Plan allows you to handpick your desired book from our extensive collection.</p>
                    {selectPlan.map(feature => {
                        return(
                            <div className='plan-feature'>
                                <CheckIcon />
                                <p>{feature}</p>
                            </div>
                        )
                    })}
                    <a href='/subscribe/personal'><button className='subscribe-btn' onClick={() => choosePlan("especific")}>Choose</button></a>
                </Container>
                <Container className='plan'>
                    <h2>Surprise Genre Book Plan</h2>
                    <p>With our Surprise Genre Book Plan, you'll receive a carefully selected book from a genre choose by you in each delivery.</p>
                    {surprisePlan.map(feature => {
                        return(
                            <div className='plan-feature'>
                                <CheckIcon />
                                <p>{feature}</p>
                            </div>
                        )
                    })}
                    <a href='/subscribe/personal'><button className='subscribe-btn' onClick={()=> choosePlan("surprise")}>Choose</button></a>
                </Container>
                
            </div>
        </React.Fragment>
    )
}