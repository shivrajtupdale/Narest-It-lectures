import { useState } from "react";
import React from "react";


export function Task1(){

    const[FontFamily,setFontFamily] = useState({});
    const[FontColor,setFontColor] = useState({});
    const[FontSize,setFontSize] =useState({FontSize : "10px"});

    const[TextStyle,setTextStyle] = useState({
        color : FontColor,
        fontSize : FontSize, 
        fontFamily : FontFamily
    })

    function HandleFontFamilyChange(e){
        setFontFamily(e.target.value);
    };
    function HandleFontColorChange(e){
        setFontColor(e.target.value);
    };
    function HandleFontSizeChange(e){
        setFontSize(e.target.value + "px");
    };
    function HandleTextStyleChange(){
        setTextStyle({
            color : FontColor,
            fontSize : FontSize, 
            fontFamily : FontFamily
        })
    }

    return (
        <div className="container-fluid d-flex justify-content-center w-25">

        <div>
            <dl>
                <dt>Font Family</dt>
                <dd>
                    <select className="form-select" onChange={HandleFontFamilyChange}>
                        <option >Select Font Family</option>
                        <option >Arial</option>
                        <option >Algerian</option>
                    </select>
                </dd>

                <dt>Font Color</dt>
                <dd><input type="color" className="form-control" onChange={HandleFontColorChange}/></dd>

                <dt>Font Size</dt>
                <dd>
                     1 <input type="range" min="0" max="100" className="form-range" onChange={HandleFontSizeChange}/> 100
                </dd>

            </dl>

            <button className="btn btn-primary w-100" onClick={HandleTextStyleChange}>Update</button>

           

            <div>
            <p className="p-5" style={TextStyle} >Change will be seen here</p>
            </div>

        </div>

        </div>
    )
}