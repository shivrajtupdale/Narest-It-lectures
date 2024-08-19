import React, { useEffect, useState } from "react";
import axios from "axios";

export function FakeStore() {
  const [Categories, setCategories] = useState([]);
  const [Products, setProducts] = useState([{}]);
  const [CartItems] = useState([]);
  const [CartCount,setCartCount] = useState(0);
  const [ToggleTable,setToggleTable] = useState({display:"none"});

  function LoadCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        setCategories(response.data);
      });
  }

  function LoadProducts(url) {
    axios.get(url)
    .then((response) => {
      setProducts(response.data);
    });
  };
  function HandleAddClick(e){
    axios.get(`http://fakestoreapi.com/products/${e.target.name}`)
    .then(response=>{
      CartItems.push(response.data);
      alert(`${response.data.title} \nAdded To Cart`);
      setCartCount(CartItems.length);
    })
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
  }, []);

  function handleCategoryChange(e){
    if(e.target.value === "all"){
        LoadProducts(`https://fakestoreapi.com/products`);
    }else{
        LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
    
  };

  function HandleShowCart(e){
    setToggleTable({
      display:(ToggleTable.display === "none") ? "block" : "none",
    })
  }

  return (
    <div className="container-fluid">

      <header className="d-flex bg-dark text-white justify-content-between p-3">

        <div className="h3">FakeStore.</div>

        <div className="fs-4">
          <span className="me-4">
            <a>Home</a>
          </span>
          <span className="me-4">
            <a>Jewellery</a>
          </span>
          <span className="me-4">
            <a>Electronics</a>
          </span>
        </div>

        <div className="fs-4">

          <button onClick={HandleShowCart} className="bi btn btn-light bi-cart4 position-relative">
            <span className="badge position-absolute rounded rounded-circle bg-danger text-white">
              {CartCount}
            </span>
          </button>

        </div>

      </header>

      <section className="mt-3 row">

        <nav className="col-2">

          <div className="mt-4">

            <label className="fw-bold form-label">Select Category</label>

            <div className="pb-5">
              <select className="form-select" onChange={handleCategoryChange}>
                {Categories.map((category) => (
                  <option key={category} value={category}>
                    {" "}
                    {category.toUpperCase()}{" "}
                  </option>
                ))}
              </select>
            </div>

          </div>
          <div className="pt-5">

            <table className="table table-hover caption-top" style={ToggleTable} >
              <caption>Your Cart Items</caption>

              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Preview</th>
                </tr>
              </thead>

              <tbody>
                {
                  CartItems.map(item=>
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td><img src={item.image} height="50" width="50"  /></td>
                    </tr>
                  )
                }
              </tbody>

            </table>

          </div>
        </nav>

        <main
          className="col-10 d-flex flex-wrap overflow-auto"
          style={{ height: "600px" }}
        >
          {Products.map((product) => (
            <div
              className="card p-2 m-2"
              key={product.id}
              style={{ width: "200px" }}
            >
                <img src={product.image} className="card-img-top" height="120"/>

                <div className="card-header" style={{height:"170px"}}>
                    <p>
                        {product.title}
                    </p>
                </div>

                <div className="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            {product.rating?.rate}
                            <span className="bi bi-star-fill text-success"></span>
                        </dd>
                    </dl> 
                </div>

                <div className="card-footer">
                    <button name={product.id} onClick={HandleAddClick} className="btn btn-dark w-100 bi bi-cart3">Add to Cart</button>
                </div>
                
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}
