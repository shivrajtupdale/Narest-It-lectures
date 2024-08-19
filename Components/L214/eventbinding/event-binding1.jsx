

//! Example 1:
import { useState } from "react"

// export function EventBinding1(){

//     function HandleNavClick(){
//         alert("Nav clicked");
//     };
//     function HandleBtnClick(e){
//         alert("Home Clicked");
//         e.stopPropagation();
//     }

//     return (
//         <div className="container-fluid">
//         <nav onClick={HandleNavClick} className="bg-dark text-white m-4 p-4">
//             <h1>Nav Bar</h1>
//             <button onClick={HandleBtnClick} className="btn btn-light">Home</button>
            
//         </nav>
//         </div>
//     )
// }

//? Here nav is parent and home is child event . Now when we click on home nav is also alerted due to propagation. so the event propagates from child to parent .

//* solution to this is use e.stopPropagation().

//=================================================================================================

//! Example 2: 

// export function EventBinding1(){

//     function HandleSubmitClick(e){
//         alert("Submit is clicked now");
//         e.preventDefault();
//     }
    
//     return (
//         <div>
//             <h1>Register</h1>
//             <form onSubmit={HandleSubmitClick}>
//             User Name <input type="text" name="UserName"/> <button type="submit" >Submit</button>
//             </form>
//         </div>
//     )
// }

// here the submit button has a default functionality it will turn [ http://localhost:3000] to [http://localhost:3000/?UserName=shivraj]

//but we want to run alert without making any changes in url that means the default thing should not happen.so we will use e.preventDefault().

//=================================================================================================

//! Example 3:  solve the problem

// export function EventBinding1(){

//     function HandleSubmit(e){
//         e.preventDefault();
//         for(let i = 1;i <= e.target.length; i++){

//             let sub  = e.target[i].name;

//             switch (sub) {
//                 case "Insert":
//                     alert("Inserted");
//                     break;
//                 case "Update":
//                     alert("Updated");
//                     break;
//                 case "Delete":
//                     alert("Deleted");
//                     break;
//             }
//         };


//     }

//     return (
//         <>
//         <div>
//             <h1>Register</h1>
//             <form onSubmit={HandleSubmit}>
//                 <input type="text" name="UserName"/>
//                 <button name = "Insert">Insert</button>
//                 <button name="Update">Update</button>
//                 <button name="Delete">Delete</button>
//             </form>
//         </div>
//         </>
//     )
// }


