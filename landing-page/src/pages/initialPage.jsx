import React from 'react';

import { Header } from '../components/header';
import { Hero } from './hero';
import { Features } from './features';
import { Opinions } from './opinions';
import { Questions } from './questions';
import { Footer } from '../components/footer';

export function InitialPage(){
    return(
        <React.Fragment>
            <Header />
            <Hero />
            <Features />
            <Opinions />
            <Questions />
            <Footer />
        </React.Fragment>
    )
}