import React from 'react'
import {Link, Route,Routes} from "react-router-dom"
import { Home } from '../Home'
import { Login } from '../Login/Login'
import { Searchmovie } from '../movie/Searchmovie'
import { Register } from '../Register/Register'
export const Mainroute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/searchmovie" element={<Searchmovie/>}></Route>
        </Routes>
    </div>
  )
}
