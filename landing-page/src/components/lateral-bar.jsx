import React from 'react';
import '../css/styles.css';


import { useDispatch } from 'react-redux';
import { changeActive } from '../redux/reducer';

export function LateralBar({ plan, activeBar }){
    const dispatch = useDispatch();

    return(
        <React.Fragment>
            <div className="lateral-bar">
                <div  onClick={() => dispatch(changeActive("p1"))} className={activeBar === "p1" ? "active cont" : " cont"}>
                    <p>Personal Data</p>
                </div>
                <div  onClick={() => dispatch(changeActive("p2"))} className={activeBar === "p2" ? "active cont" : " cont"}>
                    <p>Plan</p>
                </div>
                <div  onClick={() => dispatch(changeActive("p3"))} className={activeBar === "p3" ? "active cont" : " cont"}>
                    <p>{plan === "Surprise Genre Book Plan" ? "Choose Month's Book's Gender" : "Choose Month's Book"}</p>
                </div>

            </div>
        </React.Fragment>
    )
}