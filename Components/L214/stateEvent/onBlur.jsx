

import { useState } from "react";

export function OnBlur(){

    const[WarningMsg,setWarningMsg] = useState("");
    const[WarningClass,setWarningClass] = useState("");
    const[CityError,setCityError] = useState("")

        function CityChange(e){
            if(e.target.value === "-1"){
                setCityError("Please Select Your City");
            }else{
                setCityError("");
            }
        }


    function HandleWarning(e){
        if(e.target.value === ""){
            setWarningMsg("IFSC CODE Required");
            setWarningClass("text-danger");
        }else{
            setWarningMsg("");
            setWarningClass("");
        }
    }

    return (
        <>
        <div className="w-25 p-5">
            <h1>Register</h1>
            <dl>
                <dt>IFSC CODE</dt>
                <dd><input type="text" placeholder="Block Letters" className={`form-control`}
                onBlur={HandleWarning}/></dd>
                <dd className={WarningClass}>{WarningMsg}</dd>
            </dl>
        </div>
        <div className="w-25 p-5" >
            <dl>
                <dt>Select City</dt>
                <dd>
                    <select onChange={CityChange} className="form-select">
                        <option value="-1">Choose City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </dd>
                <dd className="text-danger">{CityError}</dd>
            </dl>
        </div>
        </>
    )
}