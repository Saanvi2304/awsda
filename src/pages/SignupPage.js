import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Redirect to the login page after signing up
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Sign in</a></p>
    </div>
  );
}

export default SignupPage;
