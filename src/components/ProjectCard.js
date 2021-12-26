import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({id, name, traits, image, description, code}) => {
    return (
        <div className='collectionCard'>
            <img src="https://cdn-icons-png.flaticon.com/128/1640/1640650.png" alt='technologies image' />

            <div className='details'>
                <div className='name'>
                    {name} 
                    <div className='description'>{description}</div>
                </div>

                <div className='projectLinks'>
                    <div>{code}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;