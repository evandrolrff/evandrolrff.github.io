import './contact.css';
import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

function Contact(){
    return (
        <div id="contact" className='container contact-container'>
            <h1>contact me</h1>
            <div className='contact-links'>
                
                <a href='' className='contact youtube'>
                    <AiOutlineYoutube className='icon' />
                    <h2>youtube <span>-----------</span></h2>
                </a>

                <a href='' className='contact whatsapp'>
                    <AiOutlineWhatsApp className='icon' />
                    <h2>whatsapp <span>+00 00 0000</span></h2>
                </a>

                <a href='' className='contact instagram'>
                    <AiOutlineInstagram className='icon' />
                    <h2>instagram <span>-----------</span></h2>
                </a>

            </div>
        </div>
    );
}

export default Contact;