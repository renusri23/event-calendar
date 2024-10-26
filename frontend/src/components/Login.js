// src/components/Login.js
import React from 'react';

function Login() {
  const handleLogin = () => {
    // Logic for Google authentication
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;