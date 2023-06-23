import React from "react";
import "./log_in.css";

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <br />
        <br />
        <input type="email" id="email" name="email" required />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br>
      </br>
      <br>
      </br>
      <div className="register-section">
        If you still don't have an account{" "}
        <a href="/register">Click here to register</a>.
      </div>
    </div>
  );
}

export default Login;
