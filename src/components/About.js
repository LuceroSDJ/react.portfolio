import React from 'react';
import ReactDOM from 'react-dom';
import picture from '../images/IMG_8902.jpeg';
import './About.css';

function About() {

    return (
    //revise line 7 id & class?
    <div id="about">   
        <div className="bio">
            <h2>Hello, world! My name is Carmen Lucero.</h2>
            <h3>I am a highly motivated web developer based in Austin, Texas. </h3>
            <p>I have embarked in the journey of changing careers, and I have fallen in love with the great variety of technologies and resources available for driven individuals like me. 
                My background is in social work and customers relations. Therefore, I posses a particular set of transferrable skills including problem-solving, leadership, teamwork, and a high sense of responsibility.</p>
            <p>As a lifelong learner, I have also enjoyed exploring programming languages, frameworks, and libraries such as JavaScript, Python, jQuery, React, node.js, and express.</p>
            {/* <p>I am currently looking for an opportunity to soar in the tech industry.</p> */}
            <p>I welcome the type of challenge that helps me grow as a web developer, and I would love to have the opportunity to master the technologies specific to your team. </p>
        </div>
        


        <div className="contactMe">

            <div className="myPortrait">

                <img src={picture} className="portrait" alt="portrait" />
            </div>

            <div className="invite">
                <p>I invite you to further discuss my qualifications with you.</p>
                <p>I look forward to hearing from you.</p>
                <a href="mailto:lucero.atx1@gmail.com?subject=Job%20Opportunity"> 
                    {/* <img src="./images/email_icon.png"  class="contactEmail"> */}
                    <i className="fas fa-envelope logo contactEmail"></i>
                </a>
                {/* <span class="sr-only">new email form (opens in a new window) </span> */}
            </div>

           
            
        </div>
    
    </div>
    )
}

export default About;