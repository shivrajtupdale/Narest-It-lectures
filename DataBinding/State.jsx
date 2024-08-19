import { useState } from "react";

export function ApplyState(){
    const [userName] = useState("John");   
    return (
        <>
        Hello ! {userName}
        </>
    ) 
}