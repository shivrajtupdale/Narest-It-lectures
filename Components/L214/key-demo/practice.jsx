import { useState } from "react"


//? using on key up

// export function PracticeKey(){

//     const [Users] = useState([{UserId : "John"},{UserId:"John12"},{UserId :"John_nit"}]);
//     const[UserError,setUserError] = useState("");
//     const[IsUserValid,setIsUserValid] = useState(false);
//     const[InputStyle,setInputStyle] = useState("form-control");

//     function VerifyUserId(e){
//         for (let user of Users){
//             const inputValue = e.target.value;
            
//             if( inputValue === ""){
//                 setUserError("");
//                 setInputStyle("form-control");
//                 break;

//             }else if(inputValue === user.UserId){
//                 setUserError("User Id Unavailable");
//                 setIsUserValid(false);
//                 setInputStyle("form-control is-invalid");
//                 break;

//             }else{
//                 setUserError("User Id Available");
//                 setIsUserValid(true);
//                 setInputStyle("form-control is-valid");
//             }
//         }
//     };

//     return (
//         <>
//         <div className="container-fluid w-25">
//             <h2>Register User</h2>

//             <div className="form-control ">
//             <dl>
//                 <dt>User Id</dt>
//                 <dd>
//                     <input type="text"onKeyUp={VerifyUserId} className={InputStyle}/>
//                 </dd>
//                 <dd className={(IsUserValid) ? "text-success" : "text-danger "}>{UserError}</dd>
//             </dl>
//             </div>

//         </div>
//         </>
//     )
// }


//?==============================================================================================

//? using on key press


