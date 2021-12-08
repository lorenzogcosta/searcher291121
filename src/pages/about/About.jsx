import React from 'react';

import AboutProject from './sub-components/AboutProject';
import AboutTeam from './sub-components/AboutTeam';
import './About.css';
const About = () => {
    return (
        <div className='about' >
            <AboutProject/>
            <AboutTeam/>
            
        </div>
       
    )
}

export default About;