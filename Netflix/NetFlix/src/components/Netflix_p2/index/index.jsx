import "./index.css"
import { NetflixHeader } from "../header/header"
import { NetflixMain } from "../Netflix-main/Netflix-main"


export function NetflixIndex(){
    return (
        <div className="bg-image"> 
             <div className="bg-shade ">
                <NetflixHeader></NetflixHeader>
                <NetflixMain></NetflixMain>
             </div>
        </div>
    )
}