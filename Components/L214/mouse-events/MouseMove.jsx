import { useState } from "react";

export function MouseMove() {

    const [StyleObject,setStyleObject] = useState({position:'',top:'',left:''})

  function HandleMouseMove(e) {
    setStyleObject({
        position:"fixed",
        top: e.clientY + "px",
        left:e.clientX + "px"

    })
}
  return (
    <>
      <div onMouseMove={HandleMouseMove}>

        <div style = {{height:"100vh"}}>
          <h1>Move Mouse Pointer to test</h1>
        </div>

        <img src="pic1.jpg" width="50px" height="50px" style={StyleObject}/>

      </div>
    </>
  );
}


