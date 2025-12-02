"use client";

import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "lakshmimahesh"; // Change this to your password

  const handleLogin = () => {
    if (password === correctPassword) {
      localStorage.setItem("auth", "true");
      window.location.href = "/";
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#111",
      color: "#fff"
    }}>
      <h2>Please Enter Password</h2>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginTop: "10px" }}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          marginTop: "15px",
          background: "blue",
          color: "#fff",
          border: "none"
        }}
      >
        Login
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
