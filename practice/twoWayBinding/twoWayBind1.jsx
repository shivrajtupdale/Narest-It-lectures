

import React, { useCallback, useState } from "react";

//? Example 1: 

// export function TwoWayBind1(){

//     const[Name,setName] = useState("") ;

//         function HandleName(e){
//             setName(e.target.value);
//         }

//     return (
//         <>
//         <form className="container-fluid d-flex justify-content-center align-items-center w-50">
//             <dl>
//                 <dt>UserName</dt>
//                 <dd><input type="text" className="form-control" onChange={HandleName}/></dd>
//                 <p>Hello {Name} !</p>
//             </dl>
//         </form>
//         </>
//     )
// }

//? Example 2: 

export function TwoWayBind1(){

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

    function HandleName(e){
        setProduct({
            Name : e.target.value,
            Price : Product.Price,
            City : Product.City,
            Stock : Product.Stock
        })
    };
    function HandlePrice(e){
        setProduct({
            Name : Product.Name,
            Price :e.target.value,
            City : Product.City,
            Stock : Product.Stock
        })
    };
    function HandleCity(e){
        setProduct({
            Name : Product.Name,
            Price : Product.Price,
            City : e.target.value,
            Stock : Product.Stock
        })
    };
    function HandleStock(e){
        setProduct({
            Name : Product.Name,
            Price : Product.Price,
            City : Product.City,
            Stock : e.target.checked
        })
    };

    function HandleUpdatedProduct(e){
        e.preventDefault();
        setUpdatedProduct(Product);
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-align-items-center">
        <div className="row p-5 w-50">
            <main className="col-6">
                <form>
                    <dl>
                        <dt>Product Name</dt>
                        <dd><input type="text" className="form-control"value={Product.Name} onChange={HandleName}/></dd>
                        <dt>Price</dt>
                        <dd><input type="number" className="form-control" value={Product.Price} onChange={HandlePrice}/></dd>
                        <dt>City</dt>
                        <dd>
                            <select value={Product.City} className="form-select" onChange={HandleCity}>
                                <option >Select City</option>
                                <option >Mumbai</option>
                                <option >Delhi</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-check form-switch" onChange={HandleStock} checked={Product.Stock}>
                            <input type="checkbox" className="form-check-input" value={Product.Stock}/>
                            <label className='form-check-label'>Available</label>
                        </dd>
                    </dl>
                    <button onClick={HandleUpdatedProduct} className='btn btn-primary w-100'>Update</button>
                </form>
            </main>
            <section className="col-6">
                <dl>
                    <dt>Product Name</dt>
                    <dd>{UpdatedProduct.Name}</dd>
                    <dt>Price</dt>
                    <dd>{UpdatedProduct.Price}</dd>
                    <dt>city</dt>
                    <dd>{UpdatedProduct.City}</dd>
                    <dt>stock</dt>
                    <dd>{(UpdatedProduct.Stock === true)? "Available" : "Out Of Stock"}</dd>
                </dl>
            </section>
        </div>
        </div>
    )

}

//===============================================================================================

