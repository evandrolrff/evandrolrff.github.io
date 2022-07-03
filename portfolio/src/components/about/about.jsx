import './about.css';
import React from 'react';
import Qualfication from '../qualifications/qualifications';

function About(){
    return(
        <div id='about' className='container about-container'>
            <Qualfication/>
        </div>
    );
}

export default About;