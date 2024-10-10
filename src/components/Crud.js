import React,{useState} from "react";
const Crud=()=>{
    const [arr,setArr]=useState(["raj","ayush","raxit"]);
    const [name,setName]=useState("");
    const addIntoArray=() =>{
        setArr([...arr,name]);
        setName("");
    }
    const deleteFromArray=(index)=>{
        let newArr = [...arr];
        newArr.splice(index,1);
        setArr(newArr);
    }

    const updateIntoArr=(index)=>{
        let newName=prompt("Enter Name");
        let newArr=[...arr];
        newArr[index]=newName;
        setArr(newArr);
    }

    return(
        <div>
            <input type='text'
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />

            <button onClick={addIntoArray}>Add</button>
            <ul>
                {
                    arr.map((item,index)=>{
                        return <li key={index}>{item}
                        <button onClick={()=>{deleteFromArray(index)}}>delete</button>
                        <button onClick={()=>{updateIntoArr(index)}}>edit</button>
                        </li>
                        
                    })
                }
            </ul>
        </div>
    )   
}

export default Crud;
