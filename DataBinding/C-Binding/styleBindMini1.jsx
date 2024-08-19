import { useState } from "react";

export function StyleBindMini1(){
    const [ValidationStyle,setValidationStyle] = useState({border: "",boxShadow: ""});

    function HandleStyleChange(e){
        if(e.target.value.length < 4){
            setValidationStyle({
                border:"2px solid red",
                boxShadow : "2px 2px 2px red"
            })
        }else{
            setValidationStyle({
                border:"2px solid green",
                boxShadow : "2px 2px 2px green"
            })
        }
    }
    return (
        <>
        <h1>Style Binding Proj1</h1>
        <dl>
            <dd>User Name</dd>
            <dt>
                <input type="text" placeholder="Min 4 char" style={ValidationStyle} onChange={HandleStyleChange}/>
            </dt>
        </dl>
        </>
    )
}