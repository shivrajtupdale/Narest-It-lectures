import { useState, useEffect } from "react";
// import "./event-binding-2.css";
import "./MouseOver.css";


// export function MouseOver(){

//     const [images] = useState(["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]);
//     const [Preview,setPreview] = useState("");

//     function HandleMouseOver(e){
//         setPreview(e.target.src); 
//     }

//     return (
//         <>
//         <div className="container-fluid">
//             <section className="mt-4 row">
//                 <nav className="col-2">
//                     {
//                         images.map(imagePath =>
//                             <div key={imagePath} className="mb-4" style={{width:"130px",height:"100px"}}>
//                                 <img onMouseOver={HandleMouseOver} src={imagePath} width="100px"
//                                 height="100px" />
//                             </div>
//                         )
//                     }
//                 </nav>
//                 <main className="col-10 d-flex justify-content-center align-items-center">
//                     <img src={Preview} width="500px" height="500px" />
//                 </main>
//             </section>
//         </div>
//         </>
//     )
// }

// export function MouseOver(){

//     const [images] = useState(["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]);
//     const [Preview,setPreview] = useState("");

//     function HandleMouseOver(e){
//         setPreview(e.target.src);
//     }

//     return (
//         <>
//         <div className="container-fluid">
//             <section className="row mt-4">
//                 <nav className="col-2">
//                     {
//                         images.map(imagePath => 
//                             <div>
//                                 <img src={imagePath} onMouseOver={HandleMouseOver} height="120px" width = "120px" />
//                             </div>
//                         )
//                     }
//                 </nav>
//                 <main className="col-10 ">
//                     <div className="d-flex justify-content-center align-items-center">
//                         <img src={Preview} />
//                     </div>
//                 </main>
//             </section>
//         </div>
//         </>
//     )
// }