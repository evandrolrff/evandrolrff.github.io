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
                
                <a href='https://www.linkedin.com/in/evandro-luis-rosa-fensterseifer-filho-912919208/' className='contact linkedin' target="_blank">
                    <AiOutlineLinkedin className='icon' />
                </a>

                <a href='http://lattes.cnpq.br/9397689282024193' className='contact lattes' target="_blank">
                    <MdOutlineSchool className='icon' />
                </a>

                <a href='https://github.com/evandrolrff' className='contact github' target="_blank">
                    <AiFillGithub className='icon' />
                </a>

            </div>
        </div>
    );
}

export default Contact;