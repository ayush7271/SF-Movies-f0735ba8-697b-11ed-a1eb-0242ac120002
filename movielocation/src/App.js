import logo from './logo.svg';
import './App.css';
import { Searchmovie } from './movie/Searchmovie';
import { Navbar } from './navbar/Navbar';

import { Mainroute } from './Mainroute/Mainroute';

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <Searchmovie/> */}
      <Mainroute/>
   </div>
  );
}

export default App;
