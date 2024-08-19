import React from "react";

export function Shop()
{
    var mobiles = [
        {Title: "APPLE iPhone 14 (Blue, 128 GB)", Price: 57999, Rating: 4.6, Features: ["128 GB ROM", "15.49 cm (6.1 inch) Super Retina XDR Display", "12MP + 12MP | 12MP Front Camera", "A15 Bionic Chip, 6 Core Processor Processor", "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"], Photo:"iblue.jpg"},
        {Title: "APPLE iPhone 14 (Starlight, 128 GB)", Price: 57999, Rating: 4.6, Features: ["128 GB ROM", "15.49 cm (6.1 inch) Super Retina XDR Display", "12MP + 12MP | 12MP Front Camera", "A15 Bionic Chip, 6 Core Processor Processor", "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"], Photo:"starlight.jpg"}
    ]
   
    return(
        <>
            {
                mobiles.map(item =>
                     <div key={item.Title} className="row p-2 m-2">
                        <div className="col-2">
                            <img  src={item.Photo} width="110%" />
                        </div>
                        <div className="col-7">
                            <div className="h4 text-primary">{item.Title}</div>
                            <div className="bg-success rounded rounded-pill p-1 text-center text-white" style={{width:'70px'}}>{item.Rating} <span className="bi bi-star-fill text-white"></span> </div>
                            <div className="mt-3">
                                <ul>
                                    {
                                        item.Features.map(feature =>
                                             <li key={feature}>{feature}</li>
                                            )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="h1">{item.Price.toLocaleString('en-in', {style: 'currency', currency: 'INR'})}</div>
                        </div>
                     </div>

                    )
            }
        </>
    )
}