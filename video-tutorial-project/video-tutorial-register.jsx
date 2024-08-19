import React, { useEffect, useState } from "react";
import {useFormik} from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";



export function TutorialRegister(){

    let navigate = useNavigate();
    const [Users,setUsers] = useState([]);
    const [UserError,setUserError] = useState("");
    const [ErrorStyle,setErrorStyle] = useState("text-info-emphasis")

    const formik = useFormik({
        initialValues:{
            "UserId" : " ",
            "UserName" : " ",
            "Password" : " ",
            "Mobile" : " "
        },
        onSubmit : (user)=>{
            axios.post(`http://127.0.0.1:4040/registeruser`,user)
                alert(`Registered Successfully..`);
                navigate("/login");
           
        }
    });

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4040/users`)
        .then(response=>{
            setUsers(response.data);
        })
    });

    function VerifyUserId(e){
        for(let user of Users){
            if(user.UserId === e.target.value){
                setUserError("Id taken Please try another");
                setErrorStyle("text-danger-emphasis");
            }else{
                setUserError("Id Available");
                setErrorStyle("text-info-emphasis");
            }
        }
    };


    return(
        <>
        <div>
            <form className="w-25" onSubmit={formik.handleSubmit}>
            <h3>Register User</h3>
            <dl>
                <dt className="form-label">User Id</dt>
                <dd>
                    <input className="form-control" type="text" onChange={formik.handleChange} name="UserId"onKeyUp={VerifyUserId}/>
                </dd>
                <dd className={ErrorStyle}>{UserError}</dd>
                
                <dt className="form-label">User Name</dt>
                <dd>
                    <input type="text" className="form-control"  name="UserName" onChange={formik.handleChange}/>
                </dd>
                <dt className="form-label">Password</dt>
                <dd> 
                    <input className="form-control" type="password" onChange={formik.handleChange} name="
                    password"/>
                </dd>
                <dt className="form-label">Mobile</dt>
                <dd>
                    <input className="form-control" type="number" name="Mobile" onChange={formik.handleChange}/>
                </dd>
            </dl>
            <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
            <p>
                <Link to="/login" className="text-info-emphasis">Existing User ? Login</Link>
            </p>
        </div>
        </>
    )
}