import React from "react";



export class AdminLogin extends React.Component
{
    constructor(props){
        super();
        this.state = {
            title : "Product Details",
            product : {Name : "TV" , Price : 345345},
            categories : ["ALL","ELECTRONICS", "FASHION"]
        }
    }

    render(){
        return(
            <>
                <div>
                    <h1>{this.state.title}</h1>
                    <dl>Name</dl>
                    <dd>{this.state.product.Name}</dd>
                </div>
            </>
        )
    }
}