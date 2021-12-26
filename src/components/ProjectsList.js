import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsList.css';

// loop through reposListData
// passed useState setter to set (onClick) the selected repo index from this component itself which is a 'child component' to App
const ProjectsList = ({reposListArray, setSelectedRepoID}) => {

    return (
        
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
                        // image={repo...}
                    />
                </div>
            ))}
        </div>
    )
}

export default ProjectsList;