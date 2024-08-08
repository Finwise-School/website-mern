import './AuthPages.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SignupPage = () => {
  const { isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home'); // Redirect to home if already logged in
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.text();
    if (response.ok) {
      navigate('/login'); // Redirect to login after successful signup
    } else {
      setMessage(data);
    }
  };

  return (
    <div className="auth-page">
      <div className="formContainer">
        <h2 className="text-3xl font-bold mb-8 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="formGroup mb-4">
            <label htmlFor="username" className="block font-bold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="formGroup mb-4">
            <label htmlFor="password" className="block font-bold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button className="subButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Signup
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700 font-medium">
            Login
          </a>
        </p>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default SignupPage;
