import React from 'react'
import { datasuccess,datafailure,datarequest } from"../redux/action"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from "react";
import axios from 'axios'
import { Input,Stack } from '@chakra-ui/react'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/system';


const Label = styled('label')({
    display: 'block',
  });
  

  
  const Listbox = styled('ul')(({ theme }) => ({
    width: 200,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    '& li.Mui-focused': {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
}));





export const Searchmovie = () => {
    const [search_value,set_search_value] =useState("");
    const [searchvalue1,set_search_value1] =useState("");

    const dispatch=useDispatch()
    
    const data=useSelector(store=>store.resData)
    // console.log(data,"t")
    const handelsearch=()=>{
        set_search_value1(search_value)
    }
   
  
    const gettodo=()=>{
        dispatch(datarequest())
        return axios.get(`https://data.sfgov.org/resource/yitu-d5am.json?$offset=0&$limit=500`)
        .then((res)=>{
         
         dispatch((datasuccess(res.data)))
        })  
    }
    useEffect(() => {
      gettodo()
    }, [])
    const [user,setuser]=useState([])
    
    const getdata=()=>{
       

            return axios.get("https://your-api-project-name-ayush.herokuapp.com/user").then((res)=>
            setuser(res.data)
            ).catch((e)=>console.log(e))
       
    }
    useEffect(() => {
        getdata()
    }, [])
  
  

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
      } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options:data,
        getOptionLabel: (option) => option.title
       
      });

      function com(){

        document.getElementById('gmap_canvas').innerHTML=`<iframe id="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${searchvalue1}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`
    }
    useEffect(() => {
    com()
    }, [searchvalue1])
   
  
  return (
    <div className='container'>
      <div >
      <div className='input' {...getRootProps()}>
        <Label {...getInputLabelProps()}  >
            <marquee>

            Search Movie shooting Location
            </marquee>
            <h4>  {searchvalue1?searchvalue1: "no location found"}</h4>
           
        <Input  {...getInputProps()}  width="40%" height="30px" borderRadius="5px"   /> 
       <button id="but" onClick={com}>Search</button>
            </Label>
           
      </div>
   
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions).map((option) => (
            <>
              <li {...getOptionProps({ option })} onClick={()=>
                {set_search_value1(option.locations) 
                  com()
                }}>{option.title  } </li>   
                
                </>
          ))}
        </Listbox>
      ) : null}
                    </div>
                     <div class="mapouter">
            <div id="gmap_canvas">
                <iframe id="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                </div>
<p style={{direction:"rtl"}}>user visit <span><h3>{user.length}</h3></span> </p>
    </div>
  )
}
