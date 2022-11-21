import axios from 'axios'
import React from 'react'
import "./register.css"
import { useState } from 'react'
import { alpha } from '@mui/system'
export const Register = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [password, setpassword] = useState("")
    const [confirm, setconfirm] = useState("")
    const payload={
        name:name,
        email:email,
        mobile:mobile,
        password:password,
        confirm:confirm
    }
    const add=()=>{
        if(password==confirm &&name.length!=0 && password.length!=0 && email.length!=0 && mobile.length!=0 ){

            return axios.post("https://your-api-project-name-ayush.herokuapp.com/user",payload).then((res)=>
            
            alert("posted successfully")
            ).catch((e)=>console.log(e))
        }else{
            alert("wrong credential please check once again")
        }
    }
  return (
    <div className='register'>
        <div className='container1'>
            <div>Name
                <div>
                    <input id="input"  type="text" onChange={(e)=>setname(e.target.value)} />
                </div>
            </div>
            <div>email
            <div>
                    <input id='input' type="email" onChange={(e)=>setemail(e.target.value)} />
                </div>
            </div>
            <div>mobile
            <div>
                    <input id='input' type="number" onChange={(e)=>setmobile(e.target.value)} />
                </div>
            </div>
            <div>password
            <div>
                    <input id="input" type="password" onChange={(e)=>setpassword(e.target.value)} />
                </div>
            </div>
            <div>confirm password
            <div>
                    <input id="input" type="text" onChange={(e)=>setconfirm(e.target.value)}/>
                </div>
            </div>
            <div>
                <button className='btn' onClick={add}>Submit</button>
            </div>
        </div>
        
    </div>
  )
}
