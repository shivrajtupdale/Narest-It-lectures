import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import React from "react";

export function Home(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        axios.get('http://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategories(response.data);
        })

    },[]);

    return(
        <div>

            <div>
                <h2><Link to={"Login"}>Login</Link></h2>
            
            </div>
            <h2>Categories Home</h2>
            <ol>
                {
                    categories.map(category=>
                        <li key={category}> <Link to={`products/${category}`}> {category.toUpperCase()} </Link> </li>
                        )
                }
            </ol>
        </div>
    )
}