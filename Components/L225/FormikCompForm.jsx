

// import React from "react";
// import * as yup from "yup";

// import {useFormik,Formik} from "formik";

// export function FormikCompForm(){
//     return(
//         <div className="container-fluid">
//             <Formik>
//                 initialValues{{
//                     ProductId:0,
//                     Name:"",
//                     Price:0
//                 }}
//                 validationSchema{{
//                     ProductId : yup.number().required("Number is required"),
//                     Name : yup.string().required("Name is Required"),
//                     Price : yup.number().required("Price is Required")
//                 }}
//                 onSubmit{values => alert(JSON.stringify(values))} 
//             </Formik>

//              <Form>
//                 <dl>
//                     <dt>Product Id</dt>
//                     <dd>
//                         <Field type="number" name="ProductId"></Field>
//                     </dd>
//                     <dt></dt>
//                     <dt></dt>
//                 </dl>
//              </Form>
//         </div>
//     )
// }


//?================================================================================================

// import { useState } from "react";
// import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
// import * as yup from "yup";

// export function FormikCompForm()
// {
 
//     return (
//         <div className="container-fluid">
//             <Formik
//                initialValues={{ProductId:0, Name:'', Price:0}}
//                validationSchema={yup.object({
//                 ProductId: yup.number().required("Product Required"),
//                 Name: yup.string().required("Name Required").min(4, "Name too short"),
//                 Price: yup.number().required("Price Required")
//                })}

//                onSubmit={(values)=> alert(JSON.stringify(values)) }
//             >

//              <Form className="w-25">
//                 <h1>Register Product</h1>
//                  <dl>
//                     <dt>Product Id</dt>
//                     <dd> <Field type="number" name="ProductId" className="form-control"></Field> </dd>
//                     <dd className="text-danger"> <ErrorMessage name="ProductId" /> </dd>
//                     <dt>Name</dt>
//                     <dd> <Field type="text" name="Name" className="form-select"></Field> </dd>
//                     <dd className="text-danger"> <ErrorMessage name="Name" /> </dd>
//                     <dt>Price</dt>
//                     <dd> <Field type="number" name="Price" className="form-control"></Field> </dd>
//                     <dd className="text-danger"> <ErrorMessage name="Price" /> </dd>
//                  </dl>
//                  <button className="btn btn-primary w-100">Submit</button>
//              </Form>

//             </Formik>
//         </div>
//     )
// }

//?===============================================================================================


import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";

export function FormikCompForm()
{
 
    return (
        <div className="container-fluid">
            <Formik
               initialValues={{ProductId:0, Name:'', Price:0}}
               validationSchema={yup.object({
                ProductId: yup.number().required("Product Required"),
                Name: yup.string().required("Name Required").min(4, "Name too short"),
                Price: yup.number().required("Price Required")
               })}

               onSubmit={(values)=> alert(JSON.stringify(values)) }
            >

            {
                form =>
                    <Form className="w-25">
                    <h1>Register Product</h1>
                 <dl>
                    <dt>Product Id</dt>
                    <dd> <Field type="number" name="ProductId" className="form-control"></Field> </dd>
                    <dd className="text-danger"> <ErrorMessage name="ProductId" /> </dd>
                    <dt>Name</dt>
                    <dd> <Field type="text" name="Name" className="form-select"></Field> </dd>
                    <dd className="text-danger"> <ErrorMessage name="Name" /> </dd>
                    <dt>Price</dt>
                    <dd> <Field type="number" name="Price" className="form-control"></Field> </dd>
                    <dd className="text-danger"> <ErrorMessage name="Price" /> </dd>
                 </dl>
                 <button className="btn btn-primary w-50"
                 disabled={(form.isValid) ? false : true}
                 >Submit</button>

                 <button className="btn btn-success w-50 "
                 style={{display :(form.dirty)? "inline":"none"}}
                 >Save</button>

                 <div>
                    {/* {(form.isValid)?"THE FORM IS VALID" : "iNVALID"} */}
                    
                 </div>
             </Form>

            }
            </Formik>
        </div>
    )
}