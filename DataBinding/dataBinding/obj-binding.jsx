import { DataBind2 } from "./obj2-binding";
import { DataBind3 } from "./obj3";
import { DataBind4 } from "./obj4";


export function ObjBinding() {
  var product = {
    name: "samsung",
    price: 458745,
    stock: true,
    cities: ["delhi", "hyd", "mumbai"],
    rating: { rate: 3.5, count: 5000 },
  };

  return (
    <>
    <div className = "p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">

      <h1>Case 1:</h1>

      <h2>Product details</h2>

      <dl>
        <dt>Product Name :</dt>
        <dd>{product.name}</dd>

        <dt>Price :</dt>
        <dd>{product.price}</dd>

        <dt>Stock :</dt>
        <dd>{(product.stock === true) ? "available" : "Not available"}</dd>

        <dt>Cities :</dt>
        <dd>
            <ol>
            {product.cities.map(city => 
                <li key = {city}>{city}</li>
            )}
            </ol>
        </dd>

        <dt>Ratings :</dt>
        <dd>
            {product.rating.rate} <span className="bi bi-star-fill text-success"></span> [{product.rating.count}]
        </dd>
      </dl>
      </div>
      <DataBind2></DataBind2> 
      <DataBind3></DataBind3> 
      <DataBind4></DataBind4>
    </>
  );
}
