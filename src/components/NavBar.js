import React from 'react';
// import './NavBar.css';
import themeSwitchIcon from '../images/header/theme-switch.png';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu: {display: 'none'}
            // log: {backgroundColor: 'blue'}
        }

        this.showMenu = this.showMenu.bind(this);
    }
    

    // showMenu = () => {
        // if(this.state.display === {display: 'none'}) {
        // e.preventDefault();
        // if(this.state.log === {backgroundColor: 'blue'} ) {
        // this.setState({log: {backgroundColor: 'red'}})   +++++++++++
            // this.setState({display: this.state.styles.change})
            // this.setState({display: {display: 'block'}})
        // }
    // }
    showMenu = () => {
        if(this.state.navMenu.display === "none") {
            // this.setState({log: {backgroundColor: 'green'}});
            console.log(this.state.navMenu);
            // this.setState({navMenu: {display: 'block'}});
            this.setState({navMenu: {display: 'block'}}, 
                () => console.log(this.state.navMenu))

        } else if(this.state.navMenu.display === 'block'){
            // this.setState({log: {backgroundColor: 'red'}});
            console.log(this.state.navMenu);
            // this.setState({navMenu: {display: 'none'}})
            this.setState({navMenu: {display: 'none'}}, 
                () => console.log(this.state.navMenu))
        }
    }

    render() {

    
        return (
            <header>
                <nav>
                    <h1 className='Nav-logo'>CARMEN</h1>
                    {/* <img src={logo} className='App-logo' alt='logo' /> */}
                    <div className='Nav-menu' style={this.state.navMenu}>
                        <a
                            className='Nav-link'
                            href='#about'
                        >
                            ABOUT
                        </a>
                        <a
                            className='Nav-link'
                            href='#projectsWrapper'
                        >
                            PROJECTS
                        </a>
                        <a
                            className='Nav-link'
                            href='#contact'
                        >
                            CONTACT
                        </a>
                        {/* <a
                            className='Nav-link'
                            href='https://reactjs.org'
                        >
                            BLOG
                        </a> */}
                        
                    </div>
                    <a href="#" className="icon" onClick={this.showMenu} style={this.state.log} >
                        <i className="fa fa-bars" ></i>
                    </a>




                     {/* testing  */}
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


                </nav>

                


                
            </header>
        )
    }
    
}

export default NavBar;