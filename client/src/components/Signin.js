import React,{useState} from "react"
import {Link, useHistory} from "react-router-dom"

const Signin = () => {

    const history = useHistory()
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const PostData = () =>{

        fetch("/v1/employee/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.error){
                console.log("eror");
            }
            else{
                localStorage.setItem("jwt",data.token) 
                history.push("/employee")
            }
        })
        
    }
  
    return (
<center>
          <div className="mycard">
            <div className="card auth-card input-field">

                <h2 className="social">Login</h2>
                <input type="text" placeholder="email" value={email} onChange={e=>setemail(e.target.value)}></input><br />
                <input type="password" placeholder="Password"  value={password} onChange={e=>setpassword(e.target.value)}></input> <br/><br/>

                <button className="btn waves-effect waves-light red" onClick={()=>PostData()}>  
                   <b> Signin</b>
                </button>
            
            </div>
        </div>
        </center>

    )
}

export default Signin