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
import Contact from './components/Contact';
import Footer from './components/Footer';
import bamazon from './images/bamazon1.png';
import notes from './images/react-notes.png';
import giphyAPI from './images/giphyAPI.png';
import to_do from './images/to-do.png';


function App() {

  // update punkListData with API response data
  const [reposListData, setReposListData] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(0);
  // const images = [
  //   "https://cdn3.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.jpg",
  //   "https://designshack.net/wp-content/uploads/placehold.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsG0HLghxuIhQoIru1FTTiN7dG7ChKI5EitKvZX8OOCHN7LGY8v71_GPlleszUM79TxFI&usqp=CAU"
  // ]
  const images = [
    bamazon,
    notes,
    giphyAPI,
    to_do
  ]

  // make API useCallback, retrieve data from opensea, store it in a stateful variable
  useEffect(() => {
    const getMyRepos = async () => {
      const retrievedRepos = await axios.get(
        'https://api.github.com/users/LuceroSDJ/repos'
      )

      console.log('retrievedRepos.data', retrievedRepos.data)
      const filteredData = retrievedRepos.data;
      // const result = filteredData.filter(repo => repo.stargazers_count > 0);
      const result = filteredData.filter(repo => repo.topics != "");


      // update state
      setReposListData(result);
    }

    return getMyRepos();
  }, [setReposListData])




  return (
    <div>
      <Nav />
      <About />
      <div className='portfolio'>
        {
          reposListData.length > 0 && (
            <>
              <Spotlight reposList={reposListData} selectedRepo={selectedRepo} selectedImage={images} />
              <ProjectsList reposListArray={reposListData} setSelectedRepoID={setSelectedRepo} image_srcs={images} />  {/* stateful variables managing state */} 
              {/* passed in the useState setter to ProjectsList but selectedRepoID piece of state is being handled here in app.js */}
            </>
          )
        }
      </div>

      <Contact />
      <Footer />
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