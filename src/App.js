import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Spotlight from './components/Spotlight';
import ProjectsList from './components/ProjectsList';
import { useState, useEffect } from 'react';
import About from './components/About';
// import NavBar from './components/NavBar';
// import NavBar2 from './components/NavBar2';
import Nav from './components/Nav';


function App() {

  // update punkListData with API response data
  const [reposListData, setReposListData] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(0);

  // make API useCallback, retrieve data from opensea, store it in a stateful variable
  useEffect(() => {
    const getMyRepos = async () => {
      const retrievedRepos = await axios.get(
        'https://api.github.com/users/LuceroSDJ/repos'
      )

      console.log('retrievedRepos.data', retrievedRepos.data)
      const filteredData = retrievedRepos.data;
      const result = filteredData.filter(repo => repo.stargazers_count > 0);

      // update state
      setReposListData(result);
    }

    return getMyRepos();
  }, [setReposListData])




  return (
    <div>

      {/* <NavBar /> */}
      {/* <NavBar2 /> */}

      <Nav />
      <About />

      {
        reposListData.length > 0 && (
          <>
            <Spotlight reposList={reposListData} selectedRepo={selectedRepo}/>
            <ProjectsList reposListArray={reposListData} setSelectedRepoID={setSelectedRepo} />  {/* stateful variables managing state */} 
            {/* passed in the useState setter to ProjectsList but selectedRepoID piece of state is being handled here in app.js */}
          </>
        )
      }

      
    </div>
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }