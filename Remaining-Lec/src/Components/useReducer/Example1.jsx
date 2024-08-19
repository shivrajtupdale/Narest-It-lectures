

//counter 

import { useReducer } from "react";

let initialState = {count : 0};

function reducer(state,action){
    switch(action.type){
        case "add" :
            return {count : state.count + 1};
        case "sub" :
            return {count : state.count - 1};
    }
}


export function ReducerExample1(){

    const [state,dispatch] = useReducer(reducer,initialState);

    function HandleIncrease(){
        dispatch({type : "add"})
    }

    function HandleDecrease(){
        dispatch({type : "sub"})
    }


    return (
        <>
        <div>
            <h1>The count is :{state.count}</h1>
        </div>
        <div>
            <button onClick={HandleIncrease}>Increase</button>
            <button onClick={HandleDecrease}>Decrease</button>
        </div>
        </>
    )
}