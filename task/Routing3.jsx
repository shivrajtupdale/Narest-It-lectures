

import React from "react";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import { Login } from "./RoutingPrac/Rout-Login";
import { Mobiles } from "./RoutingPrac/Route-Mobiles";
import { Details } from "./RoutingPrac/Routing-Details";


export function Shoppers(){

    
    return (
        <>
        <div className="container-fluid">
            <BrowserRouter>

            <header>
            <h1>Shoppers.</h1>
            <hr/>
                <nav className="d-flex justify-content-around fw-bold">
                    <Link to="/">Home</Link>
                    <Link to="kids">Kids</Link>
                    <Link to="mens">Mens</Link>
                    <Link to="login">Login</Link>
                    <Link to="mobiles/1">realme</Link>
                    <Link to="mobiles/2">iphone</Link>
                    <Link to="mobiles/3">samsung</Link>
                   

                </nav>
            </header>
            <hr/>
                <Routes>
                    <Route path="/" element={
                        <>
                        <h2>Home</h2>
                        <p>Year end sale</p>
                        </>
                    }></Route>

                    <Route path="kids" element={
                        <>
                        <h2>Kids Wear</h2>
                        <p>Heavy discount on kids cloth</p>
                        </>
                    }></Route>

                    <Route path="mens" element={
                        <>
                        <h2>Mens wear</h2>
                        <p>30% discount</p>
                        </>
                    }></Route>
                    
                    <Route path="mobiles/:Id" element={<Mobiles/>}></Route>
                    
                    <Route path="details/:Id/:Name/:Price" element={<Details/>}></Route>

                    <Route path="login" element={<Login/>}></Route>

                    <Route path="*" element={
                        <>
                        <code>Path Not Found</code>
                        </>
                    }></Route>
                </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}