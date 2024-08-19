

import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"

export function RoutingDemo(){
    return (
        <div>
        <div >
            <h1>Shoppers.</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                        <h2>Home</h2>
                        <p>Year End sale 40% OFF</p>
                        </>
                    } ></Route>
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
                    <Route path="*" element={
                        <>
                        <code>Path Not Found</code>
                        </>
                    }></Route>
                </Routes>
            </BrowserRouter>
        </div>
        </div>
    )
}