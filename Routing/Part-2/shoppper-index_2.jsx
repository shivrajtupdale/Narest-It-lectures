import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home_2";
import {Products} from "./products_2"
import { Details } from "./details_2";
import { Login } from "./Login_2";
import { Success } from "./Success_2";
import { Invalid } from "./Invalid_2";
import React from "react";



export function ShopperIndex()
{
    return(
        <div>
            <BrowserRouter>
                <header>
                    <h1 align="center">Shopper Index</h1>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="products/:category" element={<Products/>} >
                        <Route path="details/:id" element={<Details/>} />   
                    </Route>
                    <Route path="Login" element={<Login/>} />
                    <Route path="Success/:uname" element={<Success/> } />
                    <Route path="Invalid" element={<Invalid/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}