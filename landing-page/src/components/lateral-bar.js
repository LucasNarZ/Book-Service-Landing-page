import React from 'react';
import '../css/styles.css';

import { useState } from 'react';

export function LateralBar({ plan }){
    const [active, setActive] = useState("")

    return(
        <React.Fragment>
            <div className="lateral-bar">
                <p onClick={() => setActive("p1")} className={active == "p1" ? "active" : ""}>Personal Data</p>
                <p onClick={() => setActive("p2")} className={active == "p2" ? "active" : ""}>Plan</p>
                {plan=="Surprise Genre Book Plan" && 
                <p onClick={() => setActive("p3")} className={active == "p3" ? "active" : ""}>Choose Month's Book's Gender</p>}
                {plan=="Select Your Book Plan" && 
                <p onClick={() => setActive("p3")} className={active == "p3" ? "active" : ""}>Choose Month's Book</p>}
            </div>
        </React.Fragment>
    )
}