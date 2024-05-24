import React, { useState } from "react";
import "../css/user.css";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}api/users/signup`, {
        email,
        password,
        username,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="title-container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            required
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            required
            id="name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="reset" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>{" "}
        <p className="signin-message">Already have an account? Sign in</p>
      </form>
    </div>
  );
}
