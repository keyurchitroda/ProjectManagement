import React,{useState} from "react"
import {useHistory} from 'react-router-dom'

const Employee = ()=>{

    const history = useHistory();

    const [name,setName] = useState("");
    const [contact_number,setContactno] = useState("");
    const [email,setEmailid] = useState("");
    const [technology,setTechnology] = useState("");
    const [password,Setpassword] = useState("");



    const EMpPostData = ()=>{
        fetch("/v1/employee/empimport",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                contact_number,
                email,
                technology,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            history.push("/showemployee")
        })
    }

    return(
        <center>
        <div className="mycard">
         <div className="card auth-card input-field">

            <h1>Employee Page</h1>
             <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Employee Name"/><br/><br/>
             <input type="text" name="contactno" value={contact_number} onChange={(e)=>setContactno(e.target.value)} placeholder="Employee Contact No"/><br/><br/>
             <input type="text" name="emailid" value={email} onChange={(e)=>setEmailid(e.target.value)} placeholder="Employee Email Id"/><br/><br/>
             <input type="text" name="technology" value={technology} onChange={(e)=>setTechnology(e.target.value)} placeholder="Technology"/><br/><br/>
             <input type="text" name="password" value={password} onChange={(e)=>Setpassword(e.target.value)} placeholder="Password"/><br/><br/>
        
  
            <button onClick={()=>EMpPostData()}>Insert</button>
        </div>
       </div>
       </center>
    )
}

export default Employee
