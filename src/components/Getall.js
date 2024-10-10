import React,{useEffect, useState} from "react";
const Getall=()=>{
    const [data,setData]=useState([]);
    const appurl='http://localhost:8000/food/';
    useEffect(()=>{
        fetch(appurl)
        .then(response=>response.json())
        .then(data=>setData(data))
    },[])
    return(
        <>
            <h1>Get all data</h1>
            <ul>
                {data.map((item)=>{
                  return(
                    <li key={item.id}>{item.name}</li>
                    
                  )
})}
                    </ul>
        </>
    )
}
export default  Getall;
