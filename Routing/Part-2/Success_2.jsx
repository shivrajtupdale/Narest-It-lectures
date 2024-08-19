
import React from "react"
import { useParams } from "react-router-dom"

export function Success(){

    let params = useParams();

    return (
        <>
        <div>
            <h3>Successfully logged in User ... {params.uname}</h3>
        </div>
        </>
    )
}