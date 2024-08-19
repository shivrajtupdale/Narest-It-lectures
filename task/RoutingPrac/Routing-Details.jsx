

import React from "react";
import { useParams } from "react-router-dom";

export function Details(){

    const params = useParams();
    return(
        <>
        <div>
            <p className="fw-bold">
                Id : {params.Id} <br />
                Name : {params.Name} <br />
                Price : {params.Price} <br />
            </p>
        </div>
        </>
    )
}