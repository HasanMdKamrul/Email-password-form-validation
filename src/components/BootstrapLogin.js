import React from "react";
import { Link } from "react-router-dom";

const BootstrapLogin = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
        <p>
        <small>Don't have an account?
            <Link to='/register'>Register</Link>
        </small>
        </p>
        <button className="btn btn-primary btn-lg" type="submit">Login</button>
      </form>
    </div>
  );
};

export default BootstrapLogin;
