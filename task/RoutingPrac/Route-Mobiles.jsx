

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Mobiles(){

    const [Mobiles, setMobiles] = useState([{Name:"Realme C16", Category:"realme",Id: 1}, {Name:"Iphone 14 pro-max", Category:"iphone",Id:2}, {Name: "Samsung Ultra", Category:"samsung",Id:3}]);

    const params = useParams();


    return(

        <>
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Mobiles.filter(mobile => mobile.Id.toString() === params.Id).map(item=>
                            <tr key={item.Category}>
                                <th>{item.Name}</th>
                                <th>{item.Category}</th>
                                <th>{item.Id}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}