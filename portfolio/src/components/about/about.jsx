import './about.css';
import React from 'react';
import Qualification from '../qualifications/qualifications';

function About(){
    return(
        <div id='about' className='container about-container'>
            <Qualification/>
        </div>
    );
}

export default About;