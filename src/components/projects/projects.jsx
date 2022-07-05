import './projects.css';
import React from 'react';

const Projects = () => {
    return(
        <div id='projects' className='container projects-container'>
            <h1 className='project-txt'>Projects</h1>
            
            <div className='project project-1'>
                <div className='project-img'></div>
                <div className='project-info'>
                    <h1 className='name'>Name project</h1>
                    <h4 className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ducimus maxime, sint voluptatibus atque officia, incidunt soluta vero nihil velit odit, commodi error similique eligendi repellat dolor animi excepturi!</h4>
                    <a href='#contact' className='contact-project'>
                        <span>Link</span>
                    </a>
                </div>
            </div>

            <div className='project project-2'>
                <div className='project-img'></div>
                <div className='project-info'>
                    <h1 className='name'>Name project</h1>
                    <h4 className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ducimus maxime, sint voluptatibus atque officia, incidunt soluta vero nihil velit odit, commodi error similique eligendi repellat dolor animi excepturi!</h4>
                    <a href='#contact' className='contact-project'>
                        <span>Link</span>
                    </a>
                </div>
            </div>

            <div className='project project-3'>
                <div className='project-img'></div>
                <div className='project-info'>
                <h1 className='name'>Name project</h1>
                    <h4 className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ducimus maxime, sint voluptatibus atque officia, incidunt soluta vero nihil velit odit, commodi error similique eligendi repellat dolor animi excepturi!</h4>
                    <a href='#contact' className='contact-project'>
                        <span>Link</span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Projects;