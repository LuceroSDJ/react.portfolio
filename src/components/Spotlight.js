import { waitForElementToBeRemoved } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import './Spotlight.css';
import './Spotlight.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


const Spotlight = ({selectedRepo, reposList,selectedImage}) => {
    
    const [activeRepo, setActiveRepo] = useState(reposList[0]);
    

    // testing in progress: I want to dynamically retrieve the deployed URL instead of hard coding it 
    // const deployedLinks = [
    //     'https://lucerosdj.github.io/bamazon/',
    //     'https://lucerosdj.github.io/Clicky-Game/',
    //     'https://gentle-dusk-25183.herokuapp.com/',
    //     'https://lucerosdj.github.io/react-notes/',
    //     'https://morning-ravine-20384.herokuapp.com/'
    // ]

    // const [liveLink, setLiveLink] = useState(deployedLinks[0]);
    const [repoImage, setRepoImage] = useState(selectedImage[0]);
    
    useEffect(() => {
        setActiveRepo(reposList[selectedRepo]) 
        console.log("activeRepo.homepage", activeRepo.homepage);
        setRepoImage(selectedImage[selectedRepo]);
        // setLiveLink(deployedLinks[selectedRepo])
        // console.log("deployedLinks[selectedRepo]", deployedLinks[selectedRepo])
    }, [selectedRepo, reposList])

    // *** Run useEffect on State Change ***
    // By default, useEffect runs after every render, 
    // but it’s also perfect for running some code in response to a state change. 
    // You can limit when the effect runs by passing the second argument to useEffect.

    // Think of the second argument as an array of “dependencies” – variables that, 
    // if changed, the effect should rerun. These can be any kind of variable: props, state, or anything else.
    // source:https://daveceddia.com/useeffect-hook-examples/

    return (
        <div className='spotlight' id='portfolio'>
            <div className='spotlightContent'>

                <div className='repoHighlight'>
                    <div className='repoContainer'>
                        <img  className='selectedRepo' 
                            // src="https://cdn-icons-png.flaticon.com/128/1640/1640650.png"
                            src={repoImage}
                            alt='repo-image' 
                        />
                    </div>
                </div>

                <div className='repoDetails' style={{color: 'fuchsia'}}>
                    <div className='title'>
                        <bold>{activeRepo.name}</bold>
                    </div>
                    <span className='itemDescription'>{activeRepo.description}</span>
                </div>

                {/* <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src="https://picsum.photos/200" />
                    </div>
                </div> */}

                <div className='projectDetails'>
                    <div className='projectLinkAndHandle'>
                        <div className='link'>
                            <div className='test'>
                                <a href={activeRepo.clone_url}>
                                    <GitHubIcon className='icon' fontSize="large" />
                                </a>    
                            </div>
                            <div className='test'>
                                <a href={activeRepo.clone_url}>GitHub Repo</a>
                            </div>
                        </div>
                        <div className='link'>
                            <div className='test'>
                                <a href={activeRepo.homepage}>
                                    <LinkIcon className='icon' fontSize="large" />
                                </a> 
                            </div>
                            <div className='test'>
                                <a href={activeRepo.homepage}>Check It Out</a>
                            </div>
                        </div>
                        {/* <div className='ownerHandle'>@lucero.developer</div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Spotlight;



