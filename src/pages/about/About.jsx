import React from 'react';
import Footer from '../../../src/components-utils/footer/Footer';

import NavBar from '../../components-utils/header/NavBar';
import AboutTeam from './sub-components/AboutTeam';
import AboutProject from './sub-components/AboutProject';

import './About.css';

const About = () => {
    return (
        <div className='about' >
            <NavBar fixed="true" layout="home"/>

            <AboutProject/>
            <AboutTeam/>
            <Footer/>
        </div>
    )
}

export default About;