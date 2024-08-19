import React, { useState } from "react";




export function Counter(){
    
    const [Count,setCount] = useState(0);
    const [MulNum,setMulNum] = useState(0);

    function HandleIncrement(){
        setCount(Count + 1);
    };

    function HandleDecrement(){
        setCount(Count - 1);
    };

    function HandleMultiply(e){
        // setCount(Count*2);
        setCount(Count * MulNum);
    }

    function HandleInputChange(e){
        setMulNum(e.target.value)
    };

    return (
        <>
        <div className="text-center pt-5">
            <h2>count : {Count}</h2>
            <button onClick={HandleIncrement} className="btn btn-primary me-2">Increment</button>
            <button onClick={HandleDecrement} className="btn btn-primary me-2">Decrement</button>
            <input type="text" className="form-control me-2 w-25" onChange={HandleInputChange}/>
            <button onClick={HandleMultiply} className="btn btn-primary me-2">Multiplication </button>
        </div>
        </>
    )
}