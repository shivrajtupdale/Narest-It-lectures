// lecture 210 (13 nov 2023): two way binding 

import React, { useState } from 'react';

//todo 1 : first example 

// export function TwoWayBind(){
//         const [UserName,setUserName] = useState("John");

//         function HandleNameChange(event){
//             // console.log(e.target.value);
//             setUserName(event.target.value); 
//         }
//     return (
//         <>
//         <h1>Edit</h1>
//         User Name : <input type="text" value = {UserName} onChange={HandleNameChange}/>
//         <p>Hello ! {UserName}</p>
//         </>
//     )
// }



//todo 2: example 2

export function TwoWayBind(){

    const [Product,setProduct] = useState({
        Name : "Tv",
        Price : 0,
        City : "Select City",
        Stock : false
    });

    const [UpdatedProduct,setUpdatedProduct] = useState({
        Name : "",
        Price : 0,
        City : "",
        Stock : false
    });

    function HandleUpdateClick (){
        setUpdatedProduct(Product);
    }
    
    function ChangeName(event){
        setProduct({
            Name : event.target.value,
            Price : Product.Price,
            City : Product.City,
            Stock : Product.Stock
        });
    };

    function ChangePrice(event){
        setProduct({
            Name : Product.Name,
            Price : event.target.value,
            City : Product.City,
            Stock : Product.Stock
        });
    };

    function ChangeCity(event){
        setProduct({
            Name : Product.Name,
            Price : Product.Price,
            City : event.target.value,
            Stock : Product.Stock
        });
    };

    function ChangeStock(event){
        setProduct({
            Name : Product.Name,
            Price : Product.Price,
            City : Product.City,
            Stock : event.target.checked
        });
    };

    return (
        <>
            <div className='container-fluid'>

                <section className='row'>

                <nav className='col-3'>

                    <h1>Product Details</h1>

                    <dl className='w-50'>
                        
                        <dt>Product Name</dt>
                        <dd><input type="text" className='form-control' value={Product.Name} onChange = {ChangeName}/></dd>

                        <dt>Price</dt>
                        <dd><input type="Number" className='form-control' value={Product.Price} onChange = {ChangePrice}/></dd>

                        <dt>City</dt>
                        <dd>
                            <select className='form-select' value = {Product.City} onChange = {ChangeCity}>
                                <option>Select City</option>
                                <option>Delhi</option>
                                <option>Mumbai</option>
                                <option>Goa</option>
                            </select>
                        </dd>

                        <dt>Stock</dt>
                        <dd className='form-switch'>
                            <input type="checkbox" onChange = {ChangeStock} checked = {Product.Stock} className='form-check-input'  /><label className='form-check-label'>Available</label>
                        </dd>

                    </dl>

                    <button onClick = {HandleUpdateClick} className='btn btn-primary w-100'>Update</button>

                </nav>

                <main className='col-9 text-dark' >

                    <dl>
                        <dt>Name</dt>
                        <dd>{UpdatedProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{UpdatedProduct.Price}</dd>
                        <dt>Shipped To</dt>
                        <dd>{UpdatedProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(UpdatedProduct.Stock === true)? "Available" : "Out Of Stock"}</dd>
                    </dl>

                </main>
                
                </section>
            </div>
        
        </>
    )
}

//todo practice 

