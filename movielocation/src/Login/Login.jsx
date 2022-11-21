import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate=useNavigate()
    const [email, setemail] = useState("")

    const [password, setpassword] = useState("")
    const [data,setdata]=useState([])
    
    const getdata=()=>{
       

            return axios.get("https://your-api-project-name-ayush.herokuapp.com/user").then((res)=>
            setdata(res.data)
            ).catch((e)=>console.log(e))
       
    }
    useEffect(() => {
        getdata()
    }, [])
    const submit=()=>{
        data.forEach((e)=>{
           if(e.email==email&&e.password==password){
            console.log(true)
            navigate("/searchmovie")
           }
        })
    }
  return (
    <div className='register'>
        <div className='login'>
           
            <div>email
            <div>
                    <input id="input" type="email" onChange={(e)=>setemail(e.target.value)} />
                </div>
            </div>
            
            <div>password
            <div>
                    <input id="input" type="password" onChange={(e)=>setpassword(e.target.value)} />
                </div>
            </div>
         
            <div>
                <button className='btn' onClick={submit}>Submit</button>
            </div>
            <p>new user click here for <span>
                <Link to="/signup" style={{color:"red"}}>
                Register
                </Link>
                </span></p>
        </div>
        
    </div>
  )
}
