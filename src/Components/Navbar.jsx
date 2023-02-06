

import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { BsFillPlusSquareFill,BsPersonFill,BsFillFolderFill,BsCloudUploadFill,BsFillChatLeftTextFill,BsGearFill,BsFillBackspaceReverseFill } from "react-icons/bs";
import Appu from './App';
import { useState } from 'react';

const Navbar = () =>{
  
   const [login,setlogin] = useState("log out")

   const log = () =>
   {
    setlogin("Log in") 
   }

  return (
    <>
                 
             <div className='container1'>
                <div className="item2 item" >
                <Link className='nav nav1' to='/new'> <small><BsFillPlusSquareFill /></small>&nbsp; new </Link>
                    <Link className='nav nav2'  to='/Patient'> <small><BsPersonFill /></small>&nbsp;patient</Link> 
                    <Link className='nav nav3' to='/Folder'><small><BsFillFolderFill /></small>&nbsp;folder</Link> 
                    <Link className='nav nav4' to='/Upload'> <small><BsCloudUploadFill /></small>&nbsp;upload</Link> 
                    <Link className='nav nav5' to='/Report'> <small><BsFillChatLeftTextFill /></small>&nbsp;report</Link> 
                    <Link className='nav nav6' to='/Setting'><small><BsGearFill /></small>&nbsp;setting</Link> 
                    <Link className='nav nav7' to='/Logout' onClick={log}><small><BsFillBackspaceReverseFill /></small>&nbsp;{login}</Link> 
               </div>
              
                <div className="item3 item"><Appu /></div>
                
                </div>
        
    </>
  )
}

export default Navbar;