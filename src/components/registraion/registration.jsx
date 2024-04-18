import React, { useState } from 'react';
import './registration.css';
import TextField from '@mui/material/TextField';
import PasswordStrengthMeter from "../passwordStrengthMeter/passwordStrengthMeter";
import see from "../../assets/see.png";
import hidden from "../../assets/hidden.png";

function Registration() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [shortScoreWord, setShortScoreWord] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  const handleSignUp = () => {
    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    if (shortScoreWord !== 'good' && shortScoreWord !== 'strong') {
      setError("Please choose a stronger password.");
      return;
    }

    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email: email,
      password: password,
      timestamp: new Date().toISOString()
    };

    setEmail('');
    setPassword('');
    setRememberMe(false);
    setError('');

    console.log("User data:", userData);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleShortScoreChange = (score) => {
    setShortScoreWord(score);
  };

  return (
    <div className="leftDiv">
      <div className='loginForm'>
        <div className='input'>
          <div className='welcome'>
            <h1>Welcome to Acme.</h1>
            <h6>Create your account by filling the form below.</h6>
          </div>
          <div className='emailContainer'>
            <TextField id="email" label="Email" variant="standard" type='email' value={email} onChange={handleEmailChange} />
          </div>
          <div className="passwordContainer">
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
            <img
              src={showPassword ? see : hidden}
              alt="Toggle password visibility"
              className="showPasswordIcon"
              onClick={togglePasswordVisibility}
            />
            <PasswordStrengthMeter password={password} onShortScoreChange={handleShortScoreChange} />
          </div>
          {error && <p className="error">{error}</p>}
        </div>
        <div className='remember'>
          <input type="checkbox" className="checkbox-round" checked={rememberMe} onChange={handleRememberMeChange} />
          <h5>Remember me.</h5>
        </div>
        <button className='signUp' onClick={handleSignUp}>Sign up</button>
      </div>
      <div className='footer'>
        <p>© 2015 Acme, Inc.</p>
        <button className='terms'>Terms</button>
        <button className='privacy'>Privacy</button>
        <button className='more'>···</button>
      </div>
    </div>
  );
}

export default Registration;
