import './contact.css';
import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';

function Contact(){
    return (
        <div id="contact" className='container contact-container'>
            <h1>Contact me</h1>
            <div className='contact-links'>
                
                <a href='' className='contact linkedin'>
                    <AiOutlineLinkedin className='icon' />
                </a>

                <a href='' className='contact lattes'>
                    <MdOutlineSchool className='icon' />
                </a>

                <a href='' className='contact github'>
                    <AiFillGithub className='icon' />
                </a>

            </div>
        </div>
    );
}

export default Contact;