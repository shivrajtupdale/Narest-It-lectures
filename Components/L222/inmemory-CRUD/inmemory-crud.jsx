

import React from "react";
import { useState,useEffect } from "react";

export function InMemoryCrud(){

    const [Products,setProducts] = useState([{id:1,Name:"TV"},{id:2,Name:"Mobile"}]);
    const[NewProducts,setNewProducts] = useState({id:0,Name:""});
    const [IsEdit,setIsEdit] = useState(false);
    const [ActiveProductId,setActiveProductId] = useState(0);
    

    function HandleNewProductId(e){
        setNewProducts({
            id:parseInt(e.target.value),
            Name:Products.Name
        });
    };

    function HandleNewProductsName(e){
        setNewProducts({
            id:NewProducts.id,
            Name:e.target.value
        });
    };

    function HandleAddClick(){
        //write a code for adding items and updating item list.

        setProducts([...Products,NewProducts]);
        alert(`Product successfully added`);
        setNewProducts({
            id:0,
            Name:""
        })
        
    };

    function HandleDeleteClick(id){
        // alert(id);
        setProducts(Products.filter(product => product.id !== id ));
        alert(`record deleted`);
    };

    function HandleEditClick(id){
        // setIsEdit((IsEdit === false) ? true : false);
        setActiveProductId(id);

    };

    function HandleSaveClick(id){
        setActiveProductId(0);
    }
    function HandleNameChangeOnEdit(e){

    }

    return (
        <>
        <div className="container-fluid p-5">

            <h2>Testing CRUD</h2>
 
            <div>
                <label className="fw-bold">Add New Product</label>
                <div>
                    <dl>
                        <dt>Product Id</dt>
                        <dd><input type="number" value={NewProducts.id} onChange={HandleNewProductId}/></dd>

                        <dt>Product Name</dt>
                        <dd><input type="text" value={NewProducts.Name} onChange={HandleNewProductsName}/></dd>
                    </dl>
                    <button onClick={HandleAddClick}>Add Product</button>
                </div>
            </div>

            <table className="table table-hover">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map(product=>
                            <tr key={product.id}>
                                <td>
                                    {
                                        (product.id === ActiveProductId) ? <input type="text" value={product.Name} onChange={HandleNameChangeOnEdit}/> :  <label>{product.Name}</label>
                                    }
                                   
                                </td>
                                <td>
                                    {
                                        (product.id === ActiveProductId) ? <button onClick={() => HandleSaveClick(product.id)} className="btn btn-success bi bi-floppy m-2"></button> : <button onClick={() => HandleEditClick(product.id)} className="bi bi-pen-fill m-2 btn btn-warning"></button>
                                    }

                                    <button className="bi bi-trash btn btn-danger" onClick={()=>HandleDeleteClick(product.id)}></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
        </>
    )
}