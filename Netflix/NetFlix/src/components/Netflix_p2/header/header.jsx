
import "./header.css"

export function NetflixHeader(){
    return (  
        <header className="p-4 text-white d-flex justify-content-between">
            <div> 
                <span className="brand-title ">NETFLIX</span>
            </div>
            <div className="d-flex ">
                <div className="input-group">
                <span className="bi bi-translate input-group-text icon1" ></span>
                <select className="form-select drop" >
                    <option>English</option>
                    <option>हिन्दी</option>
                </select>
              
                </div>
                <button className="btn btn-danger ms-4 button1">Sign in</button>
            </div>
        </header>
    )
}