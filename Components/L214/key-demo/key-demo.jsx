import { useState } from "react";



export function KeyDemo(){

    const [Users] = useState([{UserId : "John"},{UserId:"John12"},{UserId :"John_nit"}]);

    const[UserError,setUserError] = useState("");

    const[IsUserValid,setIsUserValid] = useState(false);
    const [BoxStyle,setBoxStyle] = useState("form-control");

    const[CapsWarning,setCapsWarning] = useState({display:"none"});


    function VerifyUserId(e){
        for (let user of Users){
            const inputValue = e.target.value;
            
            if( inputValue === ""){
                setUserError("");
                setIsUserValid(false);
                setBoxStyle("form-control");
                break;
            }else if(inputValue === user.UserId){
                setUserError("User Id Unavailable");
                setIsUserValid(false);
                setBoxStyle("form-control is-invalid");
                break;
            }else{
                setUserError("User Id Available");
                setIsUserValid(true);
                setBoxStyle("form-control is-valid");
            }
        }
    };

    function VerifyCaps(e){
        
        if(e.which >= 65 && e.which <=90) //asci code for capital letters
        setCapsWarning({display:"block"});
        else{
            setCapsWarning({display:"none"});
        }
    }

    return (
        <>
        <div className="container-fluid w-25">
            <h2>Register User</h2>
            <div className="form-control ">
            <dl>
                <dt>User Id</dt>
                <dd>
                    <input type="text"onKeyUp={VerifyUserId} className={BoxStyle} />
                </dd>
                <dd className={(IsUserValid) ? "text-success" : "text-danger "}>{UserError}</dd>

                <dt>Password</dt>
                <dd>
                    <input type="'password'" className="form-control" onKeyPress={VerifyCaps}/>
                </dd>
                <dd className="text-warning" style={CapsWarning}>
                    <div className="bi  bi-exclamation-triangle">Warning -CAPS ON</div>
                </dd>
            </dl>
            </div>

        </div>
        </>
    )
}

//================================================================================================
// //? Task given

export function PracticeKey(){

const[ErrorMsg,setErrorMsg] =useState("");
const [ErrorClass,setErrorClass] = useState("");
// const[Grade,setGrade] = useState(1);
const[Progress,setProgress] =useState({width:""});

function verifyPassword(e){

    if(e.target.value.match(/(?=.*[A-Z]\w{4,15})/)){

        setErrorMsg("Strong Password");
        // setErrorClass("text-success");
        // setGrade(100);
        setErrorClass("bg-success");
        setProgress({width:"100%"});

    }else if(e.target.value.length < 4){
        setErrorMsg("Poor Password");
        // setErrorClass("text-danger");
        // setGrade(30);
        setErrorClass("bg-danger");
        setProgress({width:"30%"});
    }else{
        setErrorMsg("weak Password");
        // setErrorClass("text-warning");
        // setGrade(70);
        setErrorClass("bg-warning");
        setProgress({width:"70%"});
    }
}
return (
    <>
    <div>
        <h2>Register</h2>
        <dl className="w-25">
            <dt>Password</dt>
            <dd> 
                <input className="form-control" type="password" onKeyUp={verifyPassword}/>
                {/* <div>
                    <meter min="1" max="100" value={Grade}></meter>
                </div> */}
                <div className="progress mt-1">
                    <div className={`progress-bar progress-bar-animated progress-bar-striped mt-1 ${ErrorClass}`} style={Progress}>
                    {ErrorMsg}
                    </div>
                </div>
            </dd>
            {/* <dd className={ErrorClass}>
                {ErrorMsg}
            </dd> */}
        </dl>
    </div>
    </>
)
}