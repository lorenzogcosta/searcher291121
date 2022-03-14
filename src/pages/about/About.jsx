import React from 'react';
import Footer from '../../../src/components-utils/footer/Footer';

import NavBar from '../../components-utils/header/NavBar';
import AboutTeam from './sub-components/AboutTeam';

import './About.css';

const About = () => {
    return (
        <div className='about' >
            <NavBar layout="home"/>
            
            <AboutTeam/>
            <Footer/>
        </div>
    )
}

export default About;