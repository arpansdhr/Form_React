import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [user, setUser] = useState({ value: "", isTouched: false });
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [isLoading, setIsLoading] = useState(false);

  const getIsFormValid = () => {
    return (
      user.value.length >= 10 &&
      password.value.length >= 8
    );
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
    <div>
      <Box className="w-full max-w-md mx-auto mt-8 p-6 border rounded-lg">
        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-4">
            <h1 className="text-2xl font-bold">Log In</h1>
            <div>
              <TextField
                type="text"
                label="Phone number or email address"
                value={user.value}
                onChange={(e) =>
                  setUser({ ...user, value: e.target.value })
                }
                onBlur={(e) =>
                  setUser({ ...user, isTouched: true })
                }
                fullWidth
                error={user.value.length < 10 &&
                  user.isTouched}
                helperText={user.value.length < 10 &&
                  user.isTouched &&
                  "Please enter a valid number or email"}
              />
            </div>
            <div>
              <TextField
                type="password"
                label="Password"
                value={password.value}
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
                onBlur={(e) =>
                  setPassword({ ...password, isTouched: true })
                }
                fullWidth
                error={password.value.length < 8 &&
                  password.isTouched}
                helperText={password.value.length < 8 &&
                  password.isTouched &&
                  "Password should have at least 8 characters"}
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
            <div className='flex sm:m-auto justify-between ml-1'>
              <div className='bg-black font-bold m-auto w-1/3 sm:w-1/8 h-0.5 border'></div>
              <span>OR</span>
              <div className='bg-black font-bold m-auto w-1/3 sm:w-1/8 h-0.5 border'></div>
            </div>
            <div className="flex justify-center">
              <button type="button">Login with Google</button>
            </div> 
            <Link to="/forgotpassword" className="flex justify-center">
              Forgot password?
            </Link>
          </fieldset>
        </form>
      </Box>
      <Box className="w-full max-w-md mx-auto mt-8 p-6 border rounded-lg">
        <div className="text-center">
          Don't have an account?{" "}
          <Link className="text-blue-400" to="/signup">
            Sign Up
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default LogIn;
