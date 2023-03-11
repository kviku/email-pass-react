
import './App.css';


import React, { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(
    false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert("Form submitted successfully!");
    } else {
      alert("Can't submit the form.");
    }
  };

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    // email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput)) {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
  };

  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    // password validation check
    if (passwordInput.length >= 8) {
      setPasswordValidated(true);
    } else {
      setPasswordValidated(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
    // confirm password validation check
    if (confirmPasswordInput === password) {
      setConfirmPasswordValidated(true);
    } else {
      setConfirmPasswordValidated(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label><br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          
          />
          {emailValidated ? null : <p style={{color: "red"}}>invalid email formate</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label><br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordValidated ? null : (
            <p style={{color: "red"}}>Password must be at least 8 characters</p>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label><br/>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordValidated ? null : (
            <p style={{color: "red"}}>Passwords do not match</p>
          )}
        </div>
        <button type="submit" style={{background: "green", color: "white", }}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
