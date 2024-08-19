import { useState,useEffect } from "react";



export function OnCut(){
    const[Msg,setMsg] = useState("");

    useEffect(()=>{
        document.onpaste = function(){
            return false;
        }
    })
    return (
        <>
        <div className="p-5">
            <textarea rows="4" cols="40" onCut={() =>{
                setMsg("Removed and Copied to ClipBoard");
                }} onCopy={()=>{
                    setMsg("Copied to ClipBoard");
                }}>Read Our Terms Of Service</textarea>
            <p>{Msg}</p>
        </div>
        </>
    )
}


