//todo project : on apply click selected styles are applied to sample text.

import React, { useState } from "react";


export function Font() {

    const[FontFamily,setFontFamily] = useState({});
    const[FontColor,setFontColor] = useState({});
    const[FontSize,setFontSize] =useState({FontSize : "10px"});

  return (
    <div className="Container-fluid p-5">
      <fieldset className="w-25">
        <legend>
          Text Formatting

          <dl>

            <dt>Font Family</dt>
            <dd>
              <select className="form-select" value = {Font}>
                <option>Select Font</option>
                <option>Arial</option>
                <option>Algerian</option>
              </select>
            </dd>

            <dt>Font Color</dt>
            <dd>
              <input type="color" className="form-control-color" />
            </dd>

            <dt>Font Size </dt>
            <dd>
              1 <input type="range" min="10" max="100" className="form-range" /> 100
            </dd>

          </dl>

          <button className="btn btn-primary">Apply</button>
          </legend>

      </fieldset>
      
      <div align="center">
        <p>Sample text</p>
      </div>
    </div>
  );
}

//todo practice 1

// export function Font() {
//     const[Name,setName] = useState("john");

//     function HandleNameChange(e){
//         setName(e.target.value)
//     }

//     return (
//         <>
//         <div className="container-fluid d-flex justify-content-center align-items-center">
//             User Name :<input type="text" value = {Name} onChange={HandleNameChange} className="form-control w-25"/>
//             <h1>Hello there {Name}</h1>
//         </div>
//         </>
//     )
// }

//todo practice 2

// export function Font() {

//     const [title] = useState('Product Details');
//     const [product] = useState({Name:'Samsung TV', Price:456000.44});
//     const [categories] = useState(["All", "Electronics", "Footwear", "Fashion"]);

//     return (
//         <>
//         <div>
//             <h1>{title}</h1>
//             <dl>
//                 <dt>Name</dt>
//                 <dd>{product.Name}</dd>
//                 <dt>Price</dt>
//                 <dd>{product.Price}</dd>
//                 <dt>Categories</dt>
//                 <dd>
//                     <select>
//                         {categories.map((category) =>
//                         <option key = {category}> {category}</option>
//                         )}
//                     </select>
//                 </dd>
//             </dl>
//         </div>
//         </>
//     )
// }

//todo Practice 3

// export function Font() {

//     const[product] = useState({
//         Name: "Samsung TV",
//         Price: 45000.33,
//         Stock: true,
//         Cities: ["Delhi", "Hyd"],
//         Rating: {Rate:3.5, Count:5000}
//     });

//     return (
//         <>
//         <div>
//         <nav>
//         <h1>Product Details</h1>
//             <dl>
//                 <dt>Name</dt>
//                 <dd>{product.Name}</dd>

//                 <dt>Price</dt>
//                 <dd>{product.Price}</dd>

//                 <dt>Stock</dt>
//                 <dd>{(product.Stock === true) ? "Available" : "Not Available"}</dd>

//                 <dt>Cities</dt>
//                 <dd>
//                     {product.Cities.map((city) =>
//                     <li key = {city}>{city}</li>
//                     )}
//                 </dd>

//                 <dt>Review</dt>
//                 <dd>
//                     {product.Rating.Rate} and {product.Rating.Count}
//                 </dd>

//             </dl>
//         </nav>
//         <section>
//         <h2>Product Details</h2>
//           <dl>
//             <dt>Name</dt>
//             <dd>{product.Name}</dd>
//             <dt>Price</dt>
//             <dd>{product.Price}</dd>
//             <dt>Stock</dt>
//             <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
//             <dt>Shipped To</dt>
//             <dd>
//                 <ol>
//                     {
//                         product.Cities.map(city=>
//                             <li key={city}>{city}</li>
//                             )
//                     }
//                 </ol>
//             </dd>
//             <dt>Rating</dt>
//             <dd>
//                 {product.Rating.Rate} <span className="bi bi-star-fill text-success"></span> [{product.Rating.Count}]
//             </dd>
//           </dl>
//         </section>
//         </div>
//         </>
//     )

// }

//todo practice 4:

// export function Font() {

//   const [Product, setProduct] = useState({
//     Name: "TV",
//     Price: 500000,
//     City: "Select City",
//     Stock: false,
//   });
//   const [updatedProduct, setUpdatedProduct] = useState({
//     Name: "",
//     Price: 0,
//     City: "",
//     Stock: false,
//   });

//   function HandleBtnChange(){
//     setUpdatedProduct(Product);
//   }

//   function HandleNameChange(e) {
//     setProduct({
//       Name: e.target.value,
//       Price: Product.Price,
//       City: Product.City,
//       Stock: Product.Stock,
//     });
//   }
//   function HandlePriceChange(e) {
//     setProduct({
//       Name: Product.Name,
//       Price: e.target.value,
//       City: Product.City,
//       Stock: Product.Stock,
//     });
//   }
//   function HandleCityChange(e) {
//     setProduct({
//       Name: Product.Name,
//       Price: Product.Price,
//       City: e.target.value,
//       Stock: Product.Stock,
//     });
//   }
//   function HandleStockChange(e) {
//     setProduct({
//       Name: Product.Name,
//       Price: Product.Price,
//       City: Product.City,
//       Stock: e.target.checked,
//     });
//   }

//   return (
//     <>
//       <div className="container-fluid row p-5">
//         <nav className="col-4 p-5">
//           <h1>Product details</h1>
//           <dl>
//             <dt>Name</dt>
//             <dd>
//               <input
//                 type="text"
//                 value={Product.Name}
//                 onChange={HandleNameChange}
//                 className="form-control"
//               />
//             </dd>
//             <dt>Price</dt>
//             <dd>
//               <input
//                 type="number"
//                 className="form-control"
//                 value={Product.Price}
//                 onChange={HandlePriceChange}
//               />
//             </dd>
//             <dt>City</dt>
//             <dd>
//               <select
//                 className="form-control"
//                 value={Product.City}
//                 onChange={HandleCityChange}
//               >
//                 <option>Select City</option>
//                 <option>Mumbai</option>
//                 <option>Delhi</option>
//                 <option>Kolkata</option>
//               </select>
//             </dd>
//             <dt>Stock</dt>
//             <dd className="form-switch">
//               <input
//                 type="checkbox"
//                 className="form-check-input "
//                 checked={Product.Stock}
//                 onChange={HandleStockChange}
//               />
//               <label className="ps-2">Available</label>
//             </dd>
//           </dl>
//           <button onClick={HandleBtnChange}  className='btn btn-primary w-100'>Update</button>
//         </nav>
//         <section className="col-8 p-5">
//           <h1>Product details</h1>
//           <dl>
//             <dt>Name</dt>
//             <dd>{updatedProduct.Name}</dd>
//             <dt>Price</dt>
//             <dd>{updatedProduct.Price}</dd>
//             <dt>City</dt>
//             <dd>{updatedProduct.City}</dd>
//             <dt>Stock</dt>
//             <dd>{(updatedProduct.Stock === true) ? "Stock Available" : "Out of Stock"}</dd>
//           </dl>
//         </section>
//       </div>
//     </>
//   );
// }


