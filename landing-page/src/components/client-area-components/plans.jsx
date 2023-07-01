import React from 'react';
import '../../css/styles.css';


export function Plans({ plan, activeBar, changePlan }){



    return(
        <React.Fragment>
            {activeBar  === "p2" && 
                <section className="plan-switch">
                    <div className={plan === "Surprise Genre Book Plan" ? "active plan" : "plan"}>
                        <h2>Surprise Genre Book Plan</h2>
                        {plan === "Surprise Genre Book Plan" ? <button className='subscribe-btn ac'>Active</button> : <button className='subscribe-btn' onClick={() => changePlan("Surprise Genre Book Plan")}>Switch</button>}
                    </div>
                    <div className={plan === "Surprise Genre Book Plan" ? "plan" : "plan active"}>
                        <h2>Select Your Book Plan</h2>
                        {plan === "Select Your Book Plan" ? <button className='subscribe-btn ac'>Active</button> : 
                        <button className='subscribe-btn' onClick={() => changePlan("Select Your Book Plan")}>Switch</button>}
                    </div>

                </section>
            }
        </React.Fragment>
    )
}