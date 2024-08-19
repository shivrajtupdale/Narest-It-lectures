
export function DataBind2(){
    var product = {
        name: "samsung",
        price: 458745,
        stock: "true"
      };
    return (
        <>

        <div className = "p-3 mb-2 bg-secondary text-white">
        <h1>Case 2 :</h1>
        <h3>Product details</h3>
        {
            Object.keys(product).map(key => 
                <p key = {key}>{key} : {product[key]}</p>
            )
        }
        </div>

        </>
    )
}