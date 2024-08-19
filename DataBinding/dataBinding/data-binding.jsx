import React from "react";

export function DataBinding (){

    var userName = "John";
    var age = 22;
    var subscribe = false;
    return (
        <>
        <h2>Data Binding</h2>
        <p>Hello ! {userName} you will be {age + 1} next year</p>
        <p>{(subscribe === true) ? "thank you " : "please subscribe"}</p>
        </>
    )
}

export function DataBinding2() {
  var categories = ["All", "Electronics", "FootWear", "Fashion"];
  return (
    <div className="p-5"> 
      <h2>Data Binding</h2>
      <nav className="bg-dark text-white p-2 d-flex justify-content-between ">
        {categories.map((category) => (
          <span key={category} className="me-4">
            {" "}
            {category}
          </span>
        ))}
      </nav>
      <div className="btn-group-vertical p-4">
        {categories.map((category) => (
          <button key={category} className="btn btn-danger mb-1 mt-1">
            {category}
          </button>
        ))}, 
      </div>
      <ol className="p-4">
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
        <select>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <ul className="list-unstyled p-4">
          {categories.map((category) => (
            <li key={category}>
              <input type="checkbox" /> <label>{category}</label>
            </li>
          ))}
        </ul>
        <table className="table table-hover w-25 p-4">
          <thead>
            <tr>
              <th>categories</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category}>
                <td className="d-flex justify-content-between">
                  <span>{category}</span>
                  <button className="btn btn-danger bi bi-trash"></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ol>
    </div>
  );
}


// export function DataBinding() {
//   var categories = ["All", "Electronics", "FootWear", "Fashion"];
//   return (
//     <>
//     <div className="p-5">
//       <h1>Data Binding</h1>
//       <nav className="bg-dark text-white p-2 d-flex justify-content-around">
//         {categories.map((category) =>
//         <span key = {category}>{category}</span>
//         )}
//       </nav>
//       <div className="btn-group-vertical p-2">
//         {categories.map((category) => 
//         <button key = {category} className="btn btn-danger mb-1 mt-1"> {category} </button>
//         )}
//       </div>
//       <div>
//         <ul className="p-2 ">
//           {categories.map((category) => 
//           <li key = {category} className="list-group">{category}</li>
//           )}
//         </ul>
//       </div>
//       <div className="p-2">
//           <select className="form-control w-25">
//             {categories.map((category) => 
//             <option key = {category}>{category}</option>
//             )}
//           </select>
//       </div>
//       <div className="p-2 form-check form-switch">
//         <ul>
//           {categories.map((category) =>
//           <li key = {category}>
//             <input type="checkbox" className="form-check-input" /><label>{category}</label>
//           </li>
//           )}
//         </ul>
//       </div>
//     </div>
//     </>
//   )
// }