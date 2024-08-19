import { useState } from "react";

export function StyleBindP2() {
    const[Button,setButton] = useState({display:"none",});

    function HandleButton(e){
        if(e.target.checked){
            setButton({
                display: "block"
            })
        }else{
            setButton({
                display: "none"
            })
        }
    }

  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div>
          <h1>Style Binding Proj2</h1>
          <dl>
            <dd>User Name</dd>
            <dt>
              <input type="text" />
            </dt>
            <dd>
              <textarea disabled>Our terms and service</textarea>
            </dd>
            <dd>
              <input type="checkbox" onChange={HandleButton}/>
              <label>I Accept</label>
            </dd>
            <dd>
              <button style={Button} >Submit</button>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}
