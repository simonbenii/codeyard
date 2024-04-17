import React, { useState } from 'react';
import './registration.css';
import TextField from '@mui/material/TextField';
import PasswordStrengthBar from 'react-password-strength-bar';
import see from "../../assets/see.png";
import hidden from "../../assets/hidden.png";

function Registration() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [shortScoreWord, setShortScoreWord] = useState('short');
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordStrongEnough = shortScoreWord === 'okay' || shortScoreWord === 'good' || shortScoreWord === 'strong';
  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  const handleSignUp = () => {
    if (isPasswordStrongEnough && isEmailValid) {
      console.log("successful login");
    } else {
      console.log("Email format or password strength not good");
    }
  };

  const onChangeScore = (score) => {
    switch (score) {
      case 0:
        setShortScoreWord('short');
        break;
      case 1:
        setShortScoreWord('weak');
        break;
      case 2:
        setShortScoreWord('okay');
        break;
      case 3:
        setShortScoreWord('good');
        break;
      case 4:
        setShortScoreWord('strong');
        break;
      default:
        setShortScoreWord('short');
        break;
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
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
            <div className={`circle 
              ${shortScoreWord === 'strong' ? 'strong' : ''}
              ${shortScoreWord === 'good' ? 'remove' : ''}
              ${shortScoreWord === 'okay' ? 'remove' : ''}
              ${shortScoreWord === 'weak' ? 'remove' : ''}
              `} style={{ right: '0px', top: '35%' }}>
            </div>

            <div className={`circle 
              ${shortScoreWord === 'strong' ? 'good' : ''}
              ${shortScoreWord === 'good' ? 'good' : ''}
              ${shortScoreWord === 'okay' ? 'remove' : ''}
              ${shortScoreWord === 'weak' ? 'remove' : ''}
              `} style={{ right: '0px', top: '50%' }}>
            </div>

            <div className={`circle 
              ${shortScoreWord === 'strong' ? 'okay' : ''}
              ${shortScoreWord === 'good' ? 'okay' : ''}
              ${shortScoreWord === 'okay' ? 'okay' : ''}
              ${shortScoreWord === 'weak' ? 'remove' : ''}
              `} style={{ right: '0px', top: '65%' }}>
            </div>

            <div className={`circle
              ${shortScoreWord === 'strong' ? 'weak' : ''}
              ${shortScoreWord === 'good' ? 'weak' : ''}
              ${shortScoreWord === 'okay' ? 'weak' : ''}
              ${shortScoreWord === 'weak' ? 'weak' : ''}
              `} style={{ right: '0px', top: '80%' }}>
            </div>

          </div>
          <div style={{ display: 'none' }}>
            <PasswordStrengthBar password={password} onChangeScore={onChangeScore} />
          </div>
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