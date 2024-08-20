import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { useAuth } from './AuthContext';
import SignupPage from './SignupPage';

const LoginPage = () => {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Check if the user is already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirect to home if already logged in
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        // Successful login
        login(); // Set authentication state to true
        navigate('/'); // Redirect to home page
      } else {
        const error = await response.text();
        setMessage(error);
      }
    } catch (error) {
      setMessage('An error occurred during login.');
      console.error(error);
    }
  };
  
  return (
    <div className="auth-page">
      <div className="formContainer">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleLogin}>
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
          <button className="subButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
        </form>
        <p className="mt-4">Don't have an account? <Link to="/signup" className="text-blue-700 font-medium">Sign-up</Link></p>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
