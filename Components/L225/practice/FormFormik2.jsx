import React from "react";

import {useFormik} from "formik";

export function FormikForm2(){
    
    function ValidateUser(userDetails){

    let error = {
        UserName:"",
        Password:"",
        Mobile:"",
        City:"",
        Gender:""
    }

    if(userDetails.UserName==""){
        error.UserName = "User Name Required";
    } else {
        if(userDetails.UserName.length<4){
          error.UserName = "Name too short";
        } else {
          error.UserName = "";
        }
    }

    if(userDetails.Password==""){
       error.Password = "Password Required";
    }

    if(userDetails.Mobile==""){
       error.Mobile = "Mobile Required";
    } else {
        if(userDetails.Mobile.match(/\+91\d{10}/)) {
            error.Mobile = "";
        } else {
            error.Mobile = "Invalid Mobile";
        }
    }

    if(userDetails.City=="-1") {
       error.City = "Please Select Your City";
    }

    if(userDetails.Gender==""){
       error.Gender = "Please Choose Your Gender";
    }

   return error;
}

    const Formik = useFormik({
        initialValues:{
            UserName:"",
            Password:"",
            Mobile: "",
            City: "",
            Gender:""
        },validate: ValidateUser,
        onSubmit : (values) =>{
            alert(JSON.stringify(values));
        }
    })
    return (
        <>
        <div className="container-fluid">
            <form className="w-25 p-5" onSubmit={Formik.handleSubmit}>
                <h3>Formik Form</h3>
                <dl>

                    <dt>User Name</dt>
                    <dd>
                        <input name="UserName" type="text" className="form-control" onChange={Formik.handleChange}/>
                    </dd>
                    <dd className="text-danger">{Formik.errors.UserName}</dd>

                    <dt>Password</dt>
                    <dd>
                        <input name="Password" type="password" className="form-control" onChange={Formik.handleChange}/>
                    </dd>
                    <dd className="text-danger">{Formik.errors.Password}</dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input name="Mobile" type="text" className="form-control" onChange={Formik.handleChange}/>
                    </dd>
                    <dd className="text-danger">{Formik.errors.Mobile}</dd>

                    <dt>City</dt>
                    <dd>
                        <select name="City" className="form-select" onChange={Formik.handleChange}>
                            <option value="-1">Select a City</option>
                            <option >Mumbai</option>
                            <option>Pune</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{Formik.errors.City}</dd>

                    <dt>Gender</dt>
                    <dd>
                        <input name="Gender" type="radio" value="Male" className="form-check-input" onChange={Formik.handleChange}/>
                        <label className="form-check-label">Male</label>

                        <input name="Gender" type="radio" value="Female" className="form-check-input" onChange={Formik.handleChange}/>
                        <label className="form-check-label">Female</label>
                    </dd>
                    <dd className="text-danger">{Formik.errors.Gender}</dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
        </>
    )
}