import React from 'react';
import './NavBar2.css';
import punkLogo from '../images/header/cryptopunk-logo.png';
import searchIcon from '../images/header/search.png';
import themeSwitchIcon from '../images/header/theme-switch.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt='' />
            </div>


            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>
                <input className='searchInput'  placeholder='collection item' />
            </div>
            

            <div className='headerItems'>
                <p>Drops</p>
                <p>market Place</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='darkModeContainer'> 
                    <img src={themeSwitchIcon} />
                </div>
            </div>

            <div className='loginButton'>GET IN</div>
        </div>
    )
   
}

export default Header;