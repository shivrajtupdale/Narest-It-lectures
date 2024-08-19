// import "./register.css";


export function Register() {
  return (
    <>
      <main className="d-flex justify-content-center mt-4">
        <form className="border border-2 border-dark rounded p-4">
          <h2 className="bi bi-person-fill-add">Register User</h2>
          <dl>
            <dt>User Name</dt>
            <dd>
              <input type="text"className="form-control" />
            </dd>
            <dt>Password</dt>
            <dd>
              <input type="password" className="form-control" />
            </dd>
            <dt>Age</dt>
            <dd>
              <input type="number" className="form-control" />
            </dd>
            <dt>Email</dt>
            <dd>
              <input type="email" className="form-control" />
            </dd>
            <button className = "btn btn-primary">Register</button>
          </dl>
        </form>
      </main>
    </>
  );
}
