import React,{useEffect, useState} from "react"


const ShowProject = ()=>{


    const [data,setData] = useState([]);
    

    const showtData = ()=>{
        fetch("/v1/project/import",{
            method:"get",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result)
        })
    }


    useEffect(() => {
        showtData()
    }, [])




    return(
        <center>
        <div>
            <table border="2">
                <thead>
                <tr>
                    <th>title</th>
                    <th>description</th>
                    <th>company_name</th>
                    <th>required_time_in_months</th>
                    <th>project_cost</th>
                    <th>emp name</th>

                </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=>{
                            return(
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.company_name}</td>
                                    <td>{item.required_time_in_months}</td>
                                    <td>{item.project_cost}</td>
                                    <td>{item.name}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
       </div>
       </center>
    )
}

export default ShowProject
