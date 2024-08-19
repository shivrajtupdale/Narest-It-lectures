import "./Netflix-register.css"


export function NetflixRegister (){
    return (
        <form className="">
            <p className="para1">
            Ready to watch? Enter your email or mobile number to create or restart your membership.
            </p>
            <div className="input-group combDiv">
                <input type="email" placeholder="Email or mobile number" className="w-50 p-3 form-control mailbox"  />
                <button className="btn btn-danger ms-3 btn1">
                    Get Started <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </form>
    )
}