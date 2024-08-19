import { useState,useEffect } from "react";



export function OnTouch(){

    const[Msg,setMsg] = useState("");

    function GetDetails(e){
        // console.log(e.target.title);
        setMsg(e.target.title);

    }
    return (
        <div className="container-fluid">
            <h2>Touch Events</h2>
            <img src="pic1.jpg" width = "200" height = "300" onTouchStart={GetDetails} title="Iphone 14 - 30% OFF" id = "frontView"/>
            <img src="pic2.jpg" width = "200" height = "300" onTouchStart={GetDetails}title="Iphone 14 with ceramic back" id = "sideView"/>
            <h1>{Msg}</h1>

        </div>
    )
}