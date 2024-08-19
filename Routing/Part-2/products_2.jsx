import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import React from "react";

export function Products(){

    const [Products, setProducts] = useState([]);

    let params = useParams();

    useEffect(()=>{
        axios.get(`http://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[]);

    return(
        <div>
            <div style={{display:'grid', gridTemplateColumns:'6fr 6fr'}}>
              <div>
              <h3> {params.category.toUpperCase()} - Products</h3>
                {
                    Products.map(product=>
                        <Link key={product.id} to={`details/${product.id}`} style={{width:'50px'}} >
                        <img  src={product.image} alt="" width="50" height="50" style={{margin:'20px', display:'block'}}/>
                        </Link>
                        )
                }
              </div>
              <div>
                    <Outlet></Outlet>
              </div>
            </div>
            <p>
                <Link to="/">Back to Categories</Link>
            </p>
        </div>
    )
}