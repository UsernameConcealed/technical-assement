"use client";

import dynamic from "next/dynamic";
import { useState } from "react"; // Corrected import

import "../style/globals.css";
import "../lib/supabaseClient";

const LoginPage = dynamic(() => import("../pages/login"), { ssr: false }); // Fixed closing parenthesis

import CounterApp from "../pages/counterApp";

const App = () => { 
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Fixed typo in useState

  return (
    <main>
      <div>
        {isAuthenticated ? (
          <CounterApp />
        ) : (
          <LoginPage setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>
    </main>
  );
};

export default App;
