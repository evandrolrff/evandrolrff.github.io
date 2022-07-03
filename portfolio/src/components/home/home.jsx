import './home.css';
import img from '../props/img4.png';

import React from 'react';

import { BsMouse } from 'react-icons/bs';

function Home() {
    return (
        <div id='home' className='container home-container'>
            <div className='logo'>
                <img src={img} alt='' />
            </div>

            <a href='#footer' className='scroll-down'>
                <hr />
                <h5>scroll down</h5>
                <BsMouse className='scroll' />
                <hr />
            </a>

            <h2>
                <span>About Me</span> <br />
                <p> Master in Computer Science by the Graduate Program in Computer Science (PPGCC/UFSM) and Bachelor in Information Systems. My lines of research are data mining, artificial intelligence, and software engineering. And areas of interest: Machine Learning, Data Mining, Front-End, Back-End, and Mobile Development.</p>
            </h2>
        </div>
    );
}
export default Home;