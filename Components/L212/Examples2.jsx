//? Ex 5 : react style 

// setTheme("border p-5 rounded-5 bg-dark text-white");
// setButton("btn btn-secondary w-100");
// }else{
// setTheme

import React from "react";
import { useState } from "react";

// export function Font2() {

//     const [Theme, setTheme] = useState('border border-black p-5 rounded-5 border-5');
//     const [Button,setButton] = useState("btn btn-dark w-100");

//     function HandleThemeChange(e){
//         if(e.target.checked){
//             setTheme("border p-5 rounded-5 bg-dark text-white");
//             setButton("btn btn-secondary w-100");
//         }else{
//             setTheme("border border-black p-5 rounded-5 border-5");
//             setButton("btn btn-dark w-100");
//         }
//     }

//     return (
//         <>
//         <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
//             <form className={Theme}>
//                 <div className="form-check form-switch">
//                     <input type="checkbox" onChange={HandleThemeChange} className="form-check-input"/>
//                     <label>Dark Mode</label>
//                 </div>
//                 <h1 className="bi bi-person-fill-add">User Login</h1>
//                 <dl>
//                     <dt>User Name</dt>
//                     <dd><input type="text" className="form-control"/></dd>

//                     <dt>Password</dt>
//                     <dd><input type="password" className="form-control"/></dd>
//                 </dl>
//                 <button className={Button}>Sign In</button>
//             </form>
//         </div>
//         </>
//     )
// }


//todo 2: class binding

// export function Font2()
// {
//     const [sortClass, setSortClass] = useState('bi bi-sort-alpha-down btn btn-danger');

//     function handleSortClick(){
//         setSortClass((sortClass==='bi bi-sort-alpha-down btn btn-danger')?'bi bi-sort-alpha-up btn btn-success':'bi bi-sort-alpha-down btn btn-danger');
//     }

//     return (
//         <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
//             <button onClick={handleSortClick} className={sortClass}></button>
//         </div>
//     )
// }

//todo L 212 : task

export function Font2(){

    const [FontFamily,SetFontFamily] = useState("Select Font");
    const [FontSize,setFontSize] =useState("20px");
    const [FontColor,setFontColor] = useState("#000000");

    const [TextStyle, setTextStyle] = useState({color : FontColor, fontSize : FontSize, fontFamily : FontFamily});

    function HandleFontFamily(e){
        SetFontFamily(e.target.value);
    };
    function HandleFontColor(e){
        setFontColor(e.target.value);
    };
    function HandleFontSize(e){
        setFontSize(e.target.value + "px");
    };
    function HandleTextStyle(){
        setTextStyle({
            color : FontColor,
            fontSize : FontSize,
            fontFamily : FontFamily
        })
    }

 
    return (
        <div className="container-fluid">
        <div className="w-25 p-5">
            <fieldset>
                <legend>Text Formatting</legend>
                <dl>

                    <dt>Font Family</dt>
                    <dd>
                        <select className="form-select" onChange={HandleFontFamily}>
                            <option>Select Font</option>
                            <option>Arial</option>
                            <option>Algerian</option>
                        </select>
                    </dd>
                    
                    <dt>Font Color</dt>
                    <dd><input type="color" className="form-control-color" onChange={HandleFontColor}/></dd>

                    <dt>Font Size</dt>
                    <dd>
                        1 <input type="range" min="0" max="100" onChange={HandleFontSize} className="form-range"/> 100
                    </dd>
                </dl>
                <button onClick={HandleTextStyle} className="btn btn-primary w-100">APPLY</button>
            </fieldset>
            <div align="center">
                <p style={TextStyle}>Sample Text</p>
            </div>
        </div>
        </div>
    )
}


