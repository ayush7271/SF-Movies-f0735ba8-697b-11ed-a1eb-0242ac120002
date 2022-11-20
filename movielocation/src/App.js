import logo from './logo.svg';
import './App.css';
import { Searchmovie } from './movie/Searchmovie';
import { Navbar } from './navbar/Navbar';
import {UseAutocomplete} from './movie/UseAutocomplete';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Searchmovie/>
      {/* <UseAutocomplete/> */}
    
 
    </div>
  );
}

export default App;
