import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; // Import your custom CSS file

const ForgotPassword = () => {
  const [user, setUser] = useState({ value: "", isTouched: false });
  const [isLoading, setIsLoading] = useState(false);

  const getIsFormValid = () => {
    return user.value.length >= 10;
  };

  const clearForm = () => {
    setUser({ value: "", isTouched: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    // Simulate asynchronous operation, like API call
    setTimeout(() => {
      alert("Sucess! We sent a link to get back into your account.");
      clearForm();
      setIsLoading(false); // Stop loading
    }, 1000);
  };

  return (
    <>
      <Box className="forgotpassword-container">
        <form onSubmit={handleSubmit}>
          <fieldset className="forgotpassword-fieldset">
            <h1 className="forgotpassword-title">Trouble logging in?</h1>
            <p className="forgotpassword-text">
              Enter your email or phone number and we'll send you a link to get
              back into your account.
            </p>
            <div className="forgotpassword-input">
              <TextField
                type="text"
                label="Email address or phone number"
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
            <div className="forgotpassword-button-container">
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
            <div className="forgotpassword-or-container">
              <div className="forgotpassword-or-divider"></div>
              <span>OR</span>
              <div className="forgotpassword-or-divider"></div>
            </div>
          </fieldset>
        </form>
        <Link to="/Signup" className="forgotpassword-signup-link">
          Create new account
        </Link>
        <hr className="forgotpassword-hr" />
        <Link to="/" className="forgotpassword-back-link">
          Back to login
        </Link>
      </Box>
    </>
  );
};

export default ForgotPassword;
