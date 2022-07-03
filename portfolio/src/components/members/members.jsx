import './members.css';
import React from 'react';

const Members = () => {
    return(
        <div id='members' className='container members-container'>
            <h1 className='member-txt'>Members</h1>
            
            <div className='member member-1'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Evandro</h1>
                    <h3 className='position'>Leader</h3>
                    <h4 className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ducimus maxime, sint voluptatibus atque officia, incidunt soluta vero nihil velit odit, commodi error similique eligendi repellat dolor animi excepturi!</h4>
                    <a href='#contact' className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>

            <div className='member member-2'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Evandro</h1>
                    <h3 className='position'>Leader</h3>
                    <h4 className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ducimus maxime, sint voluptatibus atque officia, incidunt soluta vero nihil velit odit, commodi error similique eligendi repellat dolor animi excepturi!</h4>
                    <a href='#contact' className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>

            <div className='member member-3'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Evandro</h1>
                    <h3 className='position'>Leader</h3>
                    <h4 className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ducimus maxime, sint voluptatibus atque officia, incidunt soluta vero nihil velit odit, commodi error similique eligendi repellat dolor animi excepturi!</h4>
                    <a href='#contact' className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Members;