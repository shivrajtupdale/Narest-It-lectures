// import React from "react";
// import { UserLogin } from "../../ComponentLibrary/userLogin";

// export function PropsDemo(){

//     return (
//         <>
//         <div>
//             <h1>Shopping Home</h1>

//             <UserLogin ButtonType="btn btn-success w-100 mt-2" Theme="w-25 bg-success-subtle text-dark p-2" Title="User Login" UserLabel="Your Email" UserType="email" Verify="Confirmation Code" verifyType="number" />

//             <hr />

//             <UserLogin ButtonType="btn btn-danger w-100 mt-2" Theme="w-25 bg-danger-subtle text-dark p-2" Title="Admin Login" UserLabel="Mobile Number" UserType="number" Verify="OTP" verifyType="number" />
//         </div>
//         </>
//     )
// }


//? for Data grid 

import React from "react";
import { DataGrid } from "../../ComponentLibrary/data-grid";

export function PropsDemo(){

    return (
        <>
 <div className="container-fluid">
            <DataGrid 

            theme={'table-primary table-striped'}
            caption="Employee Table - Updated Nov 2023"
            fields={["First Name", "Last Name", "Designation"]}
            data={[{FirstName:"Raj", LastName:"Kumar", Designation:"Manager"}, {FirstName:"Kiran", LastName:"Rao", Designation:"Developer"}]} 
            
            />

            <DataGrid 
            
            theme={'table-warning table-bordered'} 
            caption="Product Details" 
            fields={["Name", "Price"]} 
            data={[{Name:"TV", Price:34000}, {Name:"Mobile", Price:12300.33}, {Name:"Watch", Price:4600.33}]} 
            
            />
        </div>
        </>
    )
}
