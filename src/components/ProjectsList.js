import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsList.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// loop through reposListData
// passed useState setter to set (onClick) the selected repo index from this component itself which is a 'child component' to App
const ProjectsList = ({reposListArray, setSelectedRepoID, image_srcs}) => {

    

    return (
        <div className='listContainer'>

            <div className='reposList'>
                
                {reposListArray.map((repo, index) => (

                
                    <div onClick={() => setSelectedRepoID(index)}>

                    {/* the state of selectedRepo is handled in App.js */}
                        <ProjectCard 
                            key={repo.id}
                            id={repo.id}
                            name={repo.name}
                            description={repo.description}
                            code={repo.clone_url}
                            // deployed={deployedLinks}
                            image={image_srcs[index]}
                        />
                    </div>
                ))}  
            </div>

            <div className='scrollArrows'>
                <KeyboardDoubleArrowLeftIcon sx={{color: 'pink'}} />
                <KeyboardDoubleArrowRightIcon />

            </div>
        </div>
        


    )
}

export default ProjectsList;


// ACTIVE:
// bamazon
// clicky-game
// friend-finder
// React-notes
// Share-GIFs