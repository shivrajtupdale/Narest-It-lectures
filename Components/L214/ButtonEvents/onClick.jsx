import { useEffect } from "react";



export function OnClick(){
      
    function OpenImage(){
        window.open("pic2.jpg","Mobile","width=600 height=800");
    } ;

    useEffect(()=>{
            document.oncontextmenu = function(){
                alert("Right Click Disabled");
                return false;
            }
    },[])

    return (
        <>
        <div className="container-fluid">
            <h2>Button Events</h2>
            <img src="pic2.jpg" height="100" width="100" onDoubleClick={OpenImage}/>
            <p>Double Click To View Large</p>

            <h1>Our Terms and Conditions</h1>
            <textarea rows="4" cols="40" >Read our terms of service</textarea>
        </div>
        </>
    )
}
