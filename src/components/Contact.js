import React from 'react';
import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
    return (
        <div id='contact'>
            <h2>LET'S CHAT!</h2>
            <h3>I would love to hear from you!</h3>



            <div className='socialNetworks'>
                <ul className="social">
                    <li>
                        <a href="https://www.linkedin.com/in/lucero-sandoval-38161b174" target="_blank" rel="noopener noreferrer" className="linkedIn_icon" >
                            <LinkedInIcon sx={{ fontSize: 60 }} />
                        </a>
                        {/* <span class="sr-only">linkedIn portfolio (opens in a new tab)</span> */}
                    </li>

                    <li>
                        <a href="mailto:lucero.atx1@gmail.com?subject=Job%20Opportunity" target="_blank" rel="noopener noreferrer" className='email_icon' >
                            <EmailIcon sx={{ fontSize: 60 }} />
                        </a>
                        {/* <span class="sr-only">new email form (opens in a new window)</span> */}
                    </li>

                    <li>
                        <a href="https://github.com/LuceroSDJ" target="_blank" rel="noopener noreferrer" className='gitHub_icon' >
                            <GitHubIcon sx={{ fontSize: 60 }} />
                        </a>
                        {/* <span class="sr-only">github portfolio (opens in a new tab)</span> */}
                    </li>
                </ul>   
            </div>

        </div>
    )
}

export default Contact;
