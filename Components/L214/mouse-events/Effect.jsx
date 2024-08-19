import { useState,useEffect } from "react";

export function UseOnLoad(){

    const [UserName,setUserName] =useState("");
 
    useEffect(()=>{
        setUserName("john");
    },[ ])

    return (
        <>
        <div>
            <h2>Register</h2>
            <p>Hello ! {UserName}</p>
        </div>
        </>
    )
}