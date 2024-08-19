

export function DataBind3(){
    var menu = [
        {category : "electronics",
        products : ['tv','mobile','laptop'] 
        },

        {
        category : "fashion",
        products : ['MenFash','WomenFash','KidsFash']
        }
    ];

    return (
        <>
        <div className = "p-3 bg-danger bg-opacity-10 border border-info border-start-0 rounded-end">
            <h1>Case 3:</h1>
        <ol>
            {
                menu.map(item =>
                    <li key = {item.category}>{item.category}
                        <ol>
                            {item.products.map(product =>
                                <li key = {product} >{product}</li>
                            )
                            }
                        </ol>
                    </li>
                )
            }
        </ol>
        </div>
        </>
    )
}