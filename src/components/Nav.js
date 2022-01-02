import React from 'react';
import './Nav.css';
import themeSwitchIcon from '../images/header/theme-switch.png';
import Avatar from '@mui/material/Avatar';


const Nav = () => {
    return (
        <header>
            <nav>
                {/* <h1 className='Nav-logo'>CARMEN</h1> */}
                <div className='Nav-logo'>
                    <Avatar sx={{ bgcolor: "white", color: "black", width: 50, height: 50 }}>CL</Avatar>
                </div>

                <div className='headerItems'>
                    <p><a class="nav-link active aboutLink" href="#about">About</a></p>
                    <p><a class="nav-link" href="#portfolio">Portfolio</a></p>
                    <p><a class="nav-link" href="#contact">Contact</a></p>
                </div>

                <div className='headerActions'>
                    <div className='darkModeContainer'> 
                        <img src={themeSwitchIcon} />
                    </div>
                </div>

                <a href="mailto:lucero.atx1@gmail.com?subject=Job%20Opportunity" target="_blank" rel="noopener noreferrer" className='actionButton' >
                    SAY HI!!!
                </a>
            </nav>

        </header>

    )
}

export default Nav;