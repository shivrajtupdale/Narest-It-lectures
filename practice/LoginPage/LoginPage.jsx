import React from "react";
import { useState } from "react";

export function LoginPage() {

    const[Theme,setTheme] = useState("border border-black rounded p-5");
    const[ButtonTheme,setButtonTheme] = useState("btn btn-dark w-100");
    const[Icon,setIcon] = useState("bi bi-person-add pt-2");

    function HandleThemes(e){
        if(e.target.checked){
            setTheme("border border-white rounded p-5 bg-dark text-light");
            setButtonTheme("btn btn-secondary w-100");

        }else{
            setTheme("border border-black rounded p-5");
            setButtonTheme("btn btn-dark w-100");

        }
    };


  return (
    <>
      <div
        className="Container-fluid d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <form className={Theme}>
          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" onClick={HandleThemes}/>
            <label className="form-check-label">Dark-Mode</label>
          </div>

          <h1 className={Icon}>Login</h1>

          <div>
            <dl>
              <dt>UserName</dt>
              <dd>
                <input type="text" className="form-control" />
              </dd>
              <dt>password</dt>
              <dd>
                <input type="password" className="form-control" />
              </dd>
            </dl>
          </div>

          <button className={ButtonTheme}>Log-In</button>
        </form>
      </div>
    </>
  );
}
