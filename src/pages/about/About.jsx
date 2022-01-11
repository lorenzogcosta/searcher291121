import React from 'react';

import NavBar from '../../components-utils/header/NavBar';
import AboutProject from './sub-components/AboutProject';
import AboutTeam from './sub-components/AboutTeam';
import Footer from '../../components-utils/footer/Footer';

import './About.css';

const About = () => {
    return (
        <div className='about' >
            <NavBar layout="home"/>
            <AboutProject/>
            <AboutTeam/>
            <Footer/>
        </div>
    )
}

export default About;