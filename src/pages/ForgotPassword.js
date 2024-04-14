import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";

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
    <div>
      <Box className="w-full max-w-md mx-auto mt-8 p-6 border rounded-lg">
        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-4">
            <h1 className="text-2xl font-bold">Trouble loggin in?</h1>
            <p>
              Enter your email or phone number and we'll send you a link to get
              back into your account.
            </p>
            <div>
              <TextField
                type="text"
                label="Email address or phone number"
                value={user.value}
                onChange={(e) =>
                  setUser({ ...user, value: e.target.value })
                }
                onBlur={(e) => setUser({ ...user, isTouched: true })}
                fullWidth
                error={user.value.length < 10 && user.isTouched}
                helperText={
                  user.value.length < 10 &&
                  user.isTouched &&
                  "Please enter a valid number or email"
                }
              />
            </div>
            <div className="flex justify-center">
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
            <div className="flex sm:m-auto justify-between ml-1">
              <div className="bg-black font-bold m-auto w-1/3 sm:w-1/8 h-0.5 border"></div>
              <span>OR</span>
              <div className="bg-black font-bold m-auto w-1/3 sm:w-1/8 h-0.5 border"></div>
            </div>
            <Link to="/Signup" className="flex justify-center">
              Create new account
            </Link>
          </fieldset>
        </form>
        <hr className="mt-12" />
        <Link to="/" className="flex justify-center mt-4">
          Back to login
        </Link>
      </Box>
    </div>
  );
};

export default ForgotPassword;
