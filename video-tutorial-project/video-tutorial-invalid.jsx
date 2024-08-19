import {Link} from "react-router-dom";



export function TutorialInvalid(){
    return(
        <>
        <div>
            <h3>Invalid Credentials..</h3>
            <Link to="/login" className="text-info-emphasis">Try Again</Link>
            
        </div>
        </>
    )
}