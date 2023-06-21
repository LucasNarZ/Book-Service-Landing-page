import React from 'react';

import { Header } from './header.js';
import { Hero } from './hero.js';
import { Features } from './features.js';
import { Opinions } from './opinions.js';
import { Questions } from './questions.js';
import { Footer } from './footer.js';

export function InicialPage(){
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