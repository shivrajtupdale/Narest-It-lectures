
//? Html form using formik ============================================================================================

import React from "react";
import * as yup from "yup";

import {useFormik} from "formik";


export function FormDemo2(){

    const formik = useFormik({
        initialValues:{
            UserName:"",
            Password:"",
            Mobile: "",
            City: "",
            Gender:""
        },
        validationSchema:yup.object({
            UserName : yup.string().required("User Name Required").min(4,"Name too Short.."),
            Password:yup.string().required("password Required"),
            Mobile: yup.string().required("Mobile Required").matches(/^\+91\d{10}$/, 'Invalid mobile number'),
            City : yup.string().required("Choose a city"),
            
          
        }),

        onSubmit:(values) =>{
            alert(JSON.stringify(values));
        }
    });



    return(
        <>
        <div className="container-fluid ">
            <form className="w-25" onSubmit={formik.handleSubmit}>
            <h3>Register</h3>
            <dl>
                <dt>UserName</dt>
                <dd><input name="UserName" type="text" className="form-control" {...formik.getFieldProps("UserName")}/></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>

                <dt>Password</dt>
                <dd><input name="Password" type="password" className="form-control" {...formik.getFieldProps("Password")} /></dd>
                <dd className="text-danger">{formik.errors.Password}</dd>

                <dt>Mobile</dt>
                <dd><input name="Mobile" type="text" className="form-control" {...formik.getFieldProps("Mobile")} /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>

                <dt>City</dt>
                <dd>
                    <select name="City" className="form-select" {...formik.getFieldProps("City")}>
                        <option value="-1">Select City</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>

                <dt>Gender</dt>
                <dd>
                    <input name="Gender" type="radio" value="Male" {...formik.getFieldProps("Gender")}/><label>Male</label>
                    <input name="Gender" type="radio" value="Female" {...formik.getFieldProps("Gender")}/><label>Female</label>

                </dd>
                <dd className="text-danger">{formik.errors.Gender}</dd>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </dl>
        </form>
        </div>
        </>
    )
}