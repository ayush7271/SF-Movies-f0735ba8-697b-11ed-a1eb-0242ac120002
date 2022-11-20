import logo from './logo.svg';
import './App.css';
import { datasuccess,datafailure,datarequest } from"./redux/action"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from "react";
import axios from 'axios'
function App() {
  const [page, setpage] =useState(1);
  const dispatch=useDispatch()

  const data=useSelector(store=>store.resData)
  console.log(data)

  const gettodo=()=>{
      dispatch(datarequest())
      return axios.get(`https://data.sfgov.org/resource/yitu-d5am.json`)
      .then((res)=>{
        console.log(res)
       dispatch((datasuccess(res.data)))
      })  
  }
  useEffect(() => {
    gettodo()
  }, [])

  return (
    <div className="App">
    <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Epic Roasthouse (399 Embarcadero)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
      <a href="https://piratebay-proxys.com/">Piratebay</a>
      </div>
   
        </div>
    </div>
  );
}

export default App;
