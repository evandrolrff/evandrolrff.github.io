import './nav.css';

import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {BiMessageRoundedDots} from 'react-icons/bi';
import {BsArrowDownCircle} from 'react-icons/bs';

function Navbar(){
    return(
        <div className='navigation'>
            <a href='#home'>
                <AiOutlineHome className='icon' />
            </a>
            <a href='#about'>
                <AiOutlineUser className='icon' />
            </a>
            <a href='#projects'>
                <AiOutlineGithub className='icon' />
            </a>
            <a href='#contact'>
                <BiMessageRoundedDots className='icon' />
            </a>
            <a href='#footer'>
                <BsArrowDownCircle className='icon' />
            </a>
        </div>
    );
}

export default Navbar;