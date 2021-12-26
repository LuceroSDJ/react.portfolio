import { waitForElementToBeRemoved } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import './Spotlight.css';
const Spotlight = ({selectedRepo, reposList}) => {
    
    const [activeRepo, setActiveRepo] = useState(reposList[0]);
    
    useEffect(() => {
        setActiveRepo(reposList[selectedRepo]) 
    }, [selectedRepo])

    // *** Run useEffect on State Change ***
    // By default, useEffect runs after every render, 
    // but it’s also perfect for running some code in response to a state change. 
    // You can limit when the effect runs by passing the second argument to useEffect.

    // Think of the second argument as an array of “dependencies” – variables that, 
    // if changed, the effect should rerun. These can be any kind of variable: props, state, or anything else.
    // source:https://daveceddia.com/useeffect-hook-examples/

    return (
        <div className='spotlight'>
            <div className='spotlightContent'>

                <div className='repoHighlight'>
                    <div className='repoContainer'>
                        <img  className='selectedRepo' 
                            src="https://cdn-icons-png.flaticon.com/128/1640/1640650.png"
                            alt='repo-image' 
                        />
                    </div>
                </div>

                <div className='repoDetails' style={{color: 'fuchsia'}}>
                    <div className='title'>{activeRepo.name}</div>
                    <span className='itemDescription'>{activeRepo.description}</span>
                </div>

                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src="https://picsum.photos/200" />
                    </div>
                </div>

                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div><a href={activeRepo.clone_url}>See code here!</a></div>
                        <div className='ownerHandle'>@lucero.developer</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Spotlight;

// ACTIVE:
// bamazon
// clicky-game
// friend-finder
// React-notes


