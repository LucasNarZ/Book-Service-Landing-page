import React from 'react';
import '../css/styles.css';

import { ClientAreaHeader } from './client-area-header';
import { LateralBar } from './lateral-bar';
import { PersonalData } from './client-area-components/personal-data.jsx';
import { Plans } from './client-area-components/plans';

import { useSelector, useDispatch } from 'react-redux';
import { changePlan } from '../redux/reducer';
import { ChooseBook } from './client-area-components/choose-book';

export function ClientArea(props){
    const dispatch = useDispatch();

    return(
        <React.Fragment>
            <section className='client-area'>
                <ClientAreaHeader />
                <div className='main-page'>
                    <LateralBar plan={useSelector(state => state.plan)} activeBar={useSelector(state => state.activeBar)}/>
                    <div className='info'>
                        <PersonalData userData={useSelector(state => state.userData)} activeBar={useSelector(state => state.activeBar)}/>
                        <Plans plan={useSelector(state => state.plan)} activeBar={useSelector(state => state.activeBar)} changePlan={dispatch(changePlan)}/>
                        <ChooseBook activeBar={useSelector(state => state.activeBar)} plan={useSelector(state => state.plan)}/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}