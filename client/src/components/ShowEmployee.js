import React,{useEffect, useState} from "react"


const ShowEmployee = ()=>{


    const [data,setData] = useState([]);
    

    const showtData = ()=>{
        fetch("/v1/employee/import",{
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
                    <th>Name</th>
                    <th>Contact No</th>
                    <th>Email id</th>
                    <th>Technolog</th>

                </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact_number}</td>
                                    <td>{item.technology}</td>

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

export default ShowEmployee
