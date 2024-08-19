//! Only half code written



import React from "react";
import { useState,useEffect } from "react";

export function FormDemo(){
    return(
        <>
        <div className="container-fluid ">
            <div className="w-25">
            <h3>Register</h3>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" className="form-control"/></dd>
                <dt>Password</dt>
                <dd><input type="number" className="form-control" /></dd>
                <dt>Mobile</dt>
                <dd><input type="number" className="form-control" /></dd>
                <dt>city</dt>
                <dd>
                    <select className="form-select">
                        <option>Select City</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <button className="btn btn-primary w-100">Submit</button>
            </dl>
        </div>
        </div>
        </>
    )
}