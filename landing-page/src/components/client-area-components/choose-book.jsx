import React from "react";
import '../../css/styles.css';


export function ChooseBook({ activeBar, plan }){
    const bookGenders = [];

    return(
        <React.Fragment>
            {activeBar === 'p3' && 
                <React.Fragment>
                    {plan === "Surprise Genre Book Plan" && 
                    <section className="gender-books">
                    
                    </section>}
                    {plan === "Select Your Book Plan" && 
                    <section className="select-book">
                    
                    </section>}
                </React.Fragment>
            }
        </React.Fragment>
    )
}