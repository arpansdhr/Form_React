import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './LogIn.css';
import google from '../assests/google.svg';

const LogIn = () => {
  const [user, setUser] = useState({ value: "", isTouched: false });
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [isLoading, setIsLoading] = useState(false);

  const getIsFormValid = () => {
    return user.value.length >= 10 && password.value.length >= 8;
  };

  const clearForm = () => {
    setUser({ value: "", isTouched: false });
    setPassword({ value: "", isTouched: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    // Simulate asynchronous operation, like API call
    setTimeout(() => {
      alert("Logged in successfully!");
      clearForm();
      setIsLoading(false); // Stop loading
    }, 1000);
  };

  return (
    <>
      <Box className="login-container">
        <form onSubmit={handleSubmit}>
          <fieldset className="login-fieldset">
            <h1 className="login-title">Log In</h1>
            <div className="login-input">
              <TextField
                type="text"
                label="Phone number or email"
                value={user.value}
                onChange={(e) => setUser({ ...user, value: e.target.value })}
                onBlur={(e) => setUser({ ...user, isTouched: true })}
                fullWidth
                error={user.value.length < 10 && user.isTouched}
                helperText={
                  user.value.length < 10 && user.isTouched &&
                  "Please enter a valid number or email"
                }
              />
            </div>
            <div className="login-input">
              <TextField
                type="password"
                label="Password"
                value={password.value}
                onChange={(e) => setPassword({ ...password, value: e.target.value })}
                onBlur={(e) => setPassword({ ...password, isTouched: true })}
                fullWidth
                error={password.value.length < 8 && password.isTouched}
                helperText={
                  password.value.length < 8 && password.isTouched &&
                  "Password should've min 8 characters"
                }
              />
            </div>
            <div className="login-button-container">
              <LoadingButton
                type="submit"
                disabled={!getIsFormValid()}
                variant="contained"
                color="primary"
                loading={isLoading}
              >
                Log In
              </LoadingButton>
            </div>
            <div className="login-or-container">
              <div className="login-or-divider"></div>
              <span>OR</span>
              <div className="login-or-divider"></div>
            </div>
          </fieldset>
        </form>
        <a href="" className="login-google-link">
          <img src={google} className="login-google-logo" alt="logo" />Log in with Google
        </a> 
        <Link to="/forgotpassword" className='login-forgotpassword-link'>Forgot password?</Link>    
        <Box className="login-container-group">
          Don't have an account?{" "}
          <Link to="/signup" className='login-signup-link'>Sign up</Link>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
