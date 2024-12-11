"use client";

import React, { useState } from "react"; // You need to import useState
import { supabase } from '../lib/supabaseClient';

const LoginPage = ({ setIsAuthenticated }) => { // Destructure setIsAuthenticated correctly
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { error, user } = await supabase.auth.signIn({ email, password });
            if (error) {
                console.error('Error logging in:', error.message);
            } else {
                console.log('Logged in:', user);
            }
            setIsAuthenticated(true); // This will set authentication status
        } catch (error) {
            console.error('Error:', error.message);
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
                        onChange={(e) => setPassword(e.target.value)} // Fixed case mismatch
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
