import React, { useState } from "react";
//class binding without css file , instead using bootstrap classes


export function ClassBinding2() {

  const[Theme,setTheme] = useState("w-25 p-3");
  const[ButtonStyle,setButtonStyle] =useState("btn btn-dark w-100")

  function ThemeChange(e){
      if(e.target.checked){
        setTheme("bg-dark text-white p-2 w-25");
        setButtonStyle("btn btn-secondary w-100")
      }else{
        setTheme("w-25 p-2");
        setButtonStyle("btn btn-dark w-100")
      }
  }
  
  return (
    <div
      className="Container-fluid d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
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
        <button className={ButtonStyle}>Log In</button>
      </form>
    </div>
  );
}
