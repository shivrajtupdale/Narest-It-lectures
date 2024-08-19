import React from "react";
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import { Login } from "./Components/Login";
import { Mobiles } from "./Components/Mobiles";
import { Details } from "./Components/Details";

export function RoutingDemo2(){
    return (
        <>
        <div >
            <div height="600">
            <BrowserRouter>
            <header>
                <div className="text-center">
                <h1 >Shoppers.</h1>
                <hr />
                </div> 
                <nav className="d-flex justify-content-around">
                    <Link to="/">Home</Link>
                    <Link to="kids">Kids</Link>
                    <Link to="men">Mens</Link>
                    <Link to="login">Login</Link>
                    {/* <Link to="mobiles">Mobiles</Link> */}
                    <Link to="mobiles/iphone">Iphone</Link>
                    <Link to="mobiles/realme">Realme</Link>
                    <Link to="details">Details</Link>
                </nav>
            </header>
            <hr />
            <div className="d-flex justify-content-center" >
                <Routes>
                    <Route path="/" element={
                        <>
                        <h2>Home</h2>
                        <p>Year End sale 40% OFF</p>
                        </>
                    }></Route>
                    <Route path="kids" element={
                        <>
                        <h2>Kid's Fashion</h2>
                        <p>30% Off on KidsWear</p>
                        </>
                    }></Route>
                    <Route path="men" element={
                        <>
                        <h2>Men's Fashion</h2>
                        <p>Winter wear , Shoes, Jeans</p>
                        </>
                    }></Route>

                    <Route path="mobiles/:category" element={<Mobiles/>}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="details/:id/:name/:price/:stock" element={<Details/>}></Route>
                    
                    <Route path="*" element={
                        <>
                        <code>Path Not Found</code>
                        </>
                    }></Route>
                </Routes>
                </div>
            </BrowserRouter>
        </div>
        </div>
        </>
    )
}