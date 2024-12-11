"use client";

import React, { useState } from "react"; // Import useState
import { supabase } from "../lib/supabaseClient"; // Ensure correct import

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Ignore the credentials and set authentication to true directly
      setIsAuthenticated(true); // Update authentication status regardless of credentials
      console.log("Logged in with any credentials");

      // Optionally, you can call supabase.auth.api.resetPasswordForEmail(email) or other methods if needed
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="container">
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
