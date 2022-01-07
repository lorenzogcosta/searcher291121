import React from 'react';
import Footer from '../../../src/components-utils/footer/Footer';

import AboutProject from './sub-components/AboutProject';
import AboutTeam from './sub-components/AboutTeam';
import './About.css';
const About = () => {
    return (
        <div className='about' >
            <AboutProject/>
            <AboutTeam/>
            <Footer />            
        </div>       
    )
}

export default About;