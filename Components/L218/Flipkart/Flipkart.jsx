import { useEffect,useState } from "react";


export function Flipkart(){

    const[Product,setProduct] = useState({
        title:"",
        price:0,
        image:"",
        rating:{
            rate:0,
            count:0,
            reviews:0
        },
        features:[]
    });

    useEffect(()=>{
        var http = new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState === 4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    },[])

    return (
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-3">
                    <img src={Product.image} height="400px" width="350px"/>
                </div>
                <div className="col-9">
                    <h3 className="text-primary">{Product.title}</h3>
                    <div>
                        <span className="badge bg-success">{Product.rating.rate}<span className="bi bi-star-fill"></span></span>
                        <span className="fw-bold ms-3 text-secondary">{Product.rating.count} Ratings & {Product.rating.reviews} Reviews</span>
                    </div>
                    <div className="mt-4" >
                        <ul className="list-unstyled">
                            {
                                Product.features.map(feature =>
                                    <li className="bi mb-3 bi-tag-fill" key={feature}>
                                        <span>{feature}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}