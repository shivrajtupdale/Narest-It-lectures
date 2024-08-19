

import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export function FakeStore1(){

    const [Categories,setCategories] = useState([]);
    const [Products,setProducts] = useState([{}]);

    function LoadCategories(){
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response=>{
            response.data.unshift("all")
            setCategories(response.data);
        })
    };

    function LoadProducts(url=`https://fakestoreapi.com/products`){
        axios.get(url)
        .then(response=>{
            setProducts(response.data);
        });
    };

    function HandleCategoryChange(e){
        if(e.target.value === "all"){
            LoadProducts(`https://fakestoreapi.com/products`);
        }else{
            LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
        
      };

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])

        return (
            <>
            <div className="container-fluid">
                <header className="d-flex justify-content-between text-white bg-dark p-3">
                    
                    <div className="h3">FakeStore.</div>

                    <div className="fs-5">
                        <span className="me-4">
                            <a>Home</a>
                        </span>
                        <span className="me-4">
                            <a>Jewellery</a>
                        </span>
                        <span className="me-4">
                            <a>Electronics</a>
                        </span>
                    </div>

                    <div>
                        <button className="bi btn btn-light bi-cart4 position-relative"></button>
                        <span className="badge position-absolute rounded rounded-circle bg-danger text-white" >0</span>
                    </div>

                </header>
                <section className="mt-3 row">

                    <nav className="col-2">
                        <div>
                            <label className="form-label">Select Category</label>
                        </div>
                        <div>
                            <select className="form-select" onChange={HandleCategoryChange}>
                                {
                                    Categories.map((category)=>
                                    <option key={category} value={category}>{category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </nav>

                    <main  className="col-10 d-flex flex-wrap overflow-auto" style={{ height: "600px" }}>
                        
                            {
                                Products.map((product)=>(
                                    <div className="card p-2 m-2 " key={product.id} style={{ width: "200px" }}>
                                        <img key={product.id} src={product.image} style={{height:"120px"}}/>

                                        <div className="card-header text-truncate text-wrap" style={{height:"100px"}}>
                                            <p>
                                            {product.title}
                                            </p>
                                        </div>

                                        <div className="card-body" style={{height:"130px"}}>
                                            <dl>
                                                <dt>Price</dt>
                                                <dd>{product.price}</dd>
                                                <dt>Ratings</dt>
                                                <dd>
                                                    {product.rating?.rate}
                                                    <span className="bi bi-star-fill text-success"></span>
                                                </dd>
                                            </dl>
                                        </div>

                                        <div>
                                        <button className="btn btn-dark w-100 bi bi-cart3">Add to Cart</button>
                                        </div>

                                    </div>
                                ))
                            }
                    
                    </main>

                </section>
            </div>
            </>
        )
}