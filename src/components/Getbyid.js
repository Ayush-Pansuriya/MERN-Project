import React,{useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
const Getbyid=()=>{
    const [data,setData]=useState({});
    const  [id,setId]=useState("");

   const params = useparams();

    useEffect(() => {
                fetch('http://localhost:8000/food/'+ params.id)
                .then(response => response.json())
                .then(data => setData(data))

},{})
return(
    <>
    <div>
        <p>{data.name}</p>
        <p>{data.id}</p>
    </div>
    </>
)
}
export default Getbyid;