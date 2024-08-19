
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Login(){

    const [UserName,setUserName] = useState("");
    const Navigate  = useNavigate()

    function HandleNameChange(e){
        setUserName(e.target.value);
    }

    function HandleLogin(){
        if(UserName === "admin"){
            Navigate(`/Success/${UserName}`);
        }else{
            Navigate("/Invalid")
        }
    }
    return (
        <>
        <div>
            <h3>Login</h3>
            UserName : <input type="text" placeholder="User Name" onChange={HandleNameChange}/> <button onClick={HandleLogin}>Login</button>
        </div>
        </>
    )
}