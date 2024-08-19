


import React from "react";
import { useState,useEffect } from "react";


export function CrudPractice(){

    const [Products,setProducts] = useState([{Id:1,Name:"TV"},{Id:2,Name:"Mobile"}]);
    const [NewProducts,setNewProducts] = useState({I:0,Name:""});

    function HandleNewProductsId(e){
        setNewProducts({
        Id : e.target.value,
        Name : NewProducts.Name
        })
    }
    function HandleNewProductsName(e){
        setNewProducts({
            Id : NewProducts.Id,
            Name : e.target.value
            })
    }

    function HandleAddClick(){
        setProducts([...Products,NewProducts]);
        alert(`Product successfully added`);
        setNewProducts({
            id:0,
            Name:""
        })
    }

    return (
        <>
        <div className="container-fluid p-5">
            <h1 className="d-flex justify-content-center ">Testing CRUD</h1>

            <div className="row">
            
            <div className="col-2">
                <div>
                    <label  className="fw-bold form-label">Add Your Product Here</label>

                    <div>
                        <dl>
                            <dt>Product Id</dt>
                            <dd>
                                <input type="number" className="form-control" value={NewProducts.Id} onChange={HandleNewProductsId}/>
                            </dd>
                            <dt>Product Name</dt>
                            <dd>
                                <input type="text" className="form-control" value={NewProducts.Name} onChange={HandleNewProductsName}/>
                            </dd>
                        </dl>
                        <button className="btn btn-primary w-100" onClick={HandleAddClick}>Add Product</button>
                    </div>
                </div>

            </div>
            <div className="col-10">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products.map((product,index) =>
                                <tr key={index}>
                                    <td>{product.Name}</td>
                                    <td>
                                        <button className="bi bi-pen-fill m-2 btn btn-warning"></button>
                                        <button className="bi bi-trash btn btn-danger"></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    )
}