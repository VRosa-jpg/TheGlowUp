import React, { useState } from "react";
import "../LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  // Logic
  const navigate = useNavigate();
  
  // Store user input
  const [signupData, setSignupData] = useState({
    username: "",
    fname: "",  // Added first name
    lname: "",  // Added last name
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes for both signup and login
  const handleChange = (e) => {
    if (e.target.name === "email" || e.target.name === "password") {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    } else {
      setSignupData({ ...signupData, [e.target.name]: e.target.value });
    }
  };

  // Handle Sign-Up Submission
  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Create a user
    try {
      const response = await fetch("http://localhost:8080/users/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData), // Sending JSON object
      });
  
      if (response.ok) {
        alert("User registered successfully!");
        navigate("/"); // Redirect to homepage after signup
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };
  

  // Handle Login Submission
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
  
      if (response.ok) {
        const user = await response.json(); // Get user data from the response
        alert("Login successful!");
  
        // Store user data in localStorage (excluding password for security)
        localStorage.setItem('isLoggedIn', 'true');  // Flag indicating that the user is logged in
        localStorage.setItem('username', user.username);
        localStorage.setItem('userID', user.id);
        localStorage.setItem('email', user.email);
        console.log(user.username);
  
        // Redirect to homepage
        navigate("/homepage");
      } else {
        alert("Login failed. Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  

  // HTML
  return (
    <div className="body">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        {/* Signup Form */}
        <div className="signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true" className="alfa-slab-one-regular">Sign up</label>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
            <input type="text" name="fname" placeholder="First Name" required onChange={handleChange} />
            <input type="text" name="lname" placeholder="Last Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <button type="submit">Sign up</button>
          </form>
        </div>

        {/* Login Form */}
        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true" className="alfa-slab-one-regular">Login</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

