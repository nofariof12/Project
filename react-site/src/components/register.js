import React, { useState } from "react";
import BackButton from "./BackButton";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Registration submitted");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your Email here:</label>
        <br />
        <br>
        </br>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br>
        </br>
        <label htmlFor="password">Enter your Password here:</label>
        <br />
        <br>
        </br>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br>
        </br>
        <button type="submit">Register</button>
        <BackButton/>
      </form>
     
    </div>
  );
}

export default Register;
