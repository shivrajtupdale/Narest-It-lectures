
import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import {useFormik} from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export function TutorialLogin(){

    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['uname']);

    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: (user)=> {
            axios.get('http://127.0.0.1:4040/users')
            .then(response=> {
                  var userDetails = response.data.find(item=> item.UserId===user.UserId);
                  if(userDetails.UserId===user.UserId && userDetails.Password===user.Password){
                      setCookie("uname", user.UserId, [ {expires: new Date('2023-12-31')} ]);
                      navigate("/videos");
                  } else {
                      navigate("/invalid");
                  }
            })
        }
    })

    useEffect(()=>{
        if(window.navigator.cookieEnabled){
            alert("You can login");
        } else {
            alert("Please Enable Cookies on your browser");
        }
        if(cookies.uname==null){
        } else {
            navigate("/videos");
        }
    },[]);
    return(
        <>
        <div>
           <form className="w-25" onSubmit={formik.handleSubmit}>
           <h3>User Login</h3>
           <dl>
            <dt className="form-label">User Id</dt>
            <dd>
                <input type="text" name="UserId" className="form-control" onChange={formik.handleChange}/>
            </dd>
            <dt className="form-label">Password</dt>
            <dd>
                <input type="password" className="form-control" name="Password" onChange={formik.handleChange}/>
            </dd>
           </dl>
           <button className="btn btn-primary w-100">Login</button>
           </form>
           <p>
            <Link to="/register" className="text-info-emphasis">New User ? Register</Link>
           </p>
        </div>
        </>
    )
}