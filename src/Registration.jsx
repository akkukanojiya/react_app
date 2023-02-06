import React, { useEffect } from "react";
import { useState } from "react";
import './Regi.css';



 function Reg()
 {
  const data = {name:"", email:"", password:""}
  const [inputdata,setinputdata] = useState(data)
  const [flag,setflag] = useState(false)

  useEffect(() =>{


  },[flag])
  function handledata(e)
  {
    setinputdata({...inputdata, [e.target.name]:e.target.value})
    
  }

    function handlesubmit(e)
    {
      e.preventDefault();
      if(!inputdata.name ||!inputdata.email ||!inputdata.password)
      {
        alert("you have to fill all the fields which mentions above ")
      }
      else
      {
        setflag(true)
      }
    }
      return(
        <>
        <h2>{inputdata.email}</h2>
        <pre>{ flag?<h2 className="ui_define"> hello You've Registered Successfully</h2>:""}</pre>
         <form className="container" onSubmit={handlesubmit}>
           <div className="header">
            <h3>Registration Form</h3>

           </div>
           <div>
              <input type="text" placeholder="Enter Your Name" name="name" value={inputdata.name} onChange={handledata} />
           </div>
           <div>
              <input type="email" placeholder="Enter Your Email" name="email" value={inputdata.email} onChange={handledata} />
           </div>
           <div>
              <input type="password" placeholder="Enter Your Password" name="password" value={inputdata.password} onChange={handledata} />
           </div>
           <div>
            <button className="butt" type="submit">Submit</button>
           </div>
         </form>
        </>
      )

 }
 export default Reg;