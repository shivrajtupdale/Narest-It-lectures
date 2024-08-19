
import React from "react"
import { Link } from "react-router-dom"

export function Invalid(){
    return (
        <>
        <div>
            <h3>Invalid</h3>
            <Link to={"/Login"}>Try Again</Link>
        </div>
        </>
    )
}