// form Events



export function File1(){

    function HandleSubmit(e){
        e.preventDefault();
        alert("Form Submitted to Server");
    }
    return (
        <>
        <div className="container-fluid">
            <form onSubmit={HandleSubmit}>
                <h2>Register User</h2>  
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="userName" /></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}