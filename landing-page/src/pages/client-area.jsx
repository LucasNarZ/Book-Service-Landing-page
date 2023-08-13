import React from 'react';
import '../css/styles.css';

import { ClientAreaHeader } from '../components/client-area-header';
import { LateralBar } from '../components/lateral-bar';
import { PersonalData } from '../components/client-area-components/personal-data.jsx';
import { Plans } from '../components/client-area-components/plans';

import { useSelector, useDispatch } from 'react-redux';
import { changeActiveBook, changePlan } from '../redux/reducer';
import { ChooseBook } from '../components/client-area-components/choose-book';
import { changeActiveGenre } from '../redux/reducer';

export function ClientArea(props){
    const dispatch = useDispatch();

    const ChangePlan = payload => {
        dispatch(changePlan(payload))
    }

    const ChangeActiveGender = payload => {
        dispatch(changeActiveGenre(payload))
    }

    const ChangeActiveBook = payload => {
        dispatch(changeActiveBook(payload))
    }

    return(
        <React.Fragment>
            <section className='client-area'>
                <ClientAreaHeader />
                <div className='main-page'>
                    <LateralBar plan={useSelector(state => state.plan)} activeBar={useSelector(state => state.activeBar)}/>
                    <div className='info'>
                        <PersonalData userData={useSelector(state => state.userData)} activeBar={useSelector(state => state.activeBar)}/>

                        <Plans plan={useSelector(state => state.plan)} activeBar={useSelector(state => state.activeBar)} changePlan={ChangePlan}/>

                        <ChooseBook activeBar={useSelector(state => state.activeBar)} plan={useSelector(state => state.plan)} changeActiveGenre={ChangeActiveGender} activeGenre={useSelector(state => state.activeGenre)} changeActiveBook={ChangeActiveBook} activeBook={useSelector(state => state.activeBook)}/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}