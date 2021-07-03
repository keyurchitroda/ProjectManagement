import React,{useState,useEffect} from "react"
import {useHistory} from 'react-router-dom'

const Project = ()=>{

    const history = useHistory();

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [company_name,setCompany_name] = useState("");
    const [required_time_in_months,setRequired_time_in_months] = useState("");
    const [project_cost,setProject_cost] = useState("");
    const [empid,setEmpid] = useState("");
    const [data,setData] = useState([]);


    useEffect(() => {
  
        fetch("/v1/employee/import",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result)
        }).catch(err=>{
            console.log(err);
        })
     
    }, [])

    const ProjPostData = ()=>{
        fetch("/v1/project/projectimport",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,
                description,
                company_name,
                required_time_in_months,
                project_cost,
                empid
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            history.push("/showproject")
        })


      
    }



    return(
        <center>
        <div>

            <h1>Employee Page</h1>
            
                        <select name="empid" value={empid} onChange={(e)=>setEmpid(e.target.value)}>
                           {/* <option value="">--Please choose an option--</option> */}
                           {
                                data.map((item)=>(
                                        <option value={item.empunkid}>{item.name}</option>
                                    )     
                                )
                            }
                        </select><br/><br/>
             <input type="text" name="name" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Project Title"/><br/><br/>
             <input type="text" name="contactno" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Project description"/><br/><br/>
             <input type="text" name="emailid" value={company_name} onChange={(e)=>setCompany_name(e.target.value)} placeholder="company_name"/><br/><br/>
             <input type="text" name="technology" value={required_time_in_months} onChange={(e)=>setRequired_time_in_months(e.target.value)} placeholder="required_time_in_months"/><br/><br/>
             <input type="text" name="password" value={project_cost} onChange={(e)=>setProject_cost(e.target.value)} placeholder="project_cost"/><br/><br/>        
  
            <button onClick={()=>ProjPostData()}>Insert</button>
       </div>
       </center>
    )
}

export default Project
