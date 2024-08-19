
import React, { useState } from "react";
import "./ClsBinding.css"

export function ClassBinding() {

  const[Theme,setTheme] = useState("w-25 p-3");

  function ThemeChange(e){
      if(e.target.checked){
        setTheme("dark-theme w-25");
      }else{
        setTheme("w-25 p-3");
      }
  }
  
  return (
    <div className="Container-fluid d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}>

      <form className={Theme}>

        <div className="Container-fluid d-flex justify-content-center form-check form-switch">
          <input type="checkbox" onChange={ThemeChange} className="form-check-input " />
          <label className="ps-1">Dark-Mode</label>
        </div>

        <h1 className="bi bi-person-circle pt-5">User Login</h1>

        <div>
          <dl>
            <dd>UserName</dd>
            <dt>
              <input type="text" className="form-control" />
            </dt>
            <dd>Password</dd>
            <dt>
              <input type="password" className="form-control" />
            </dt>
          </dl>
        </div>

        <button className="btn btn-dark w-100">Log In</button>
        
      </form>
      
    </div>
  );
}
