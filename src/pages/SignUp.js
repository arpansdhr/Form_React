import { useState } from "react";
import { validatePhone, validateEmail } from "./utils";
import { LoadingButton } from "@mui/lab";
import { TextField, MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState({ value: "", isTouched: false });
  const [email, setEmail] = useState({ value: "", isTouched: false });
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [confirmPassword, setConfirmPassword] = useState({ value: "", isTouched: false });
  const [role, setRole] = useState("select");
  const [isLoading, setIsLoading] = useState(false);

  const getIsFormValid = () => {
    return (
      firstName &&
      lastName &&
      validatePhone(phone.value) &&
      validateEmail(email.value) &&
      password.value.length >= 8 &&
      password.value === confirmPassword.value &&
      role !== "select"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPhone({ value: "", isTouched: false });
    setEmail({ value: "", isTouched: false });
    setPassword({ value: "", isTouched: false });
    setConfirmPassword({ value: "", isTouched: false });
    setRole("select");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    // Simulate asynchronous operation, like API call
    setTimeout(() => {
      alert("Account created!");
      clearForm();
      setIsLoading(false); // Stop loading
    }, 1000);
  };

  return (
    <div>
      <Box className="w-full max-w-md mx-auto mt-8 p-6 border rounded-lg">
        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-4">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <div>
              <TextField
                label="First name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                label="Last name *"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                label="Phone number *"
                value={phone.value}
                onChange={(e) =>
                  setPhone({ ...phone, value: e.target.value })
                }
                onBlur={() =>
                  setPhone({ ...phone, isTouched: true })
                }
                fullWidth
                error={!validatePhone(phone.value) &&
                  phone.isTouched}
                helperText={!validatePhone(phone.value) &&
                  phone.isTouched &&
                  "Please enter a valid phone number"}
              />
            </div>
            <div>
              <TextField
                type="email"
                label="Email address *"
                value={email.value}
                onChange={(e) =>
                  setEmail({ ...email, value: e.target.value })
                }
                onBlur={() =>
                  setEmail({ ...email, isTouched: true })
                }
                fullWidth
                error={!validateEmail(email.value) &&
                  email.isTouched}
                helperText={!validateEmail(email.value) &&
                  email.isTouched &&
                  "Please enter a valid email address"}
              />
            </div>
            <div>
              <TextField
                type="password"
                label="Password *"
                value={password.value}
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
                onBlur={() =>
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
            <div>
              <TextField
                type="password"
                label="Confirm Password *"
                value={confirmPassword.value}
                onChange={(e) =>
                  setConfirmPassword({ ...confirmPassword, value: e.target.value })
                }
                onBlur={(e) =>
                  setConfirmPassword({ ...confirmPassword, isTouched: true })
                }
                fullWidth
                error={
                  (confirmPassword.value !== password.value ||
                    confirmPassword.value === "") &&
                  confirmPassword.isTouched}
                helperText={
                  (confirmPassword.value !== password.value ||
                    confirmPassword.value === "") &&
                  confirmPassword.isTouched &&
                  "Passwords do not match"}
              />
            </div>
            <div>
              <TextField
                select
                label="Role *"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
              >
                <MenuItem value="select">Select</MenuItem>
                <MenuItem value="individual">Individual</MenuItem>
                <MenuItem value="business">Business</MenuItem>
              </TextField>
            </div>
            <div className="flex justify-center">
              <LoadingButton
                type="submit"
                disabled={!getIsFormValid()}
                variant="contained"
                color="primary"
                loading={isLoading}
              >
                Create account
              </LoadingButton>
            </div>
            <div className="text-center">
              Already have an account?{" "}
              <Link className="text-blue-400" to="/">
                Log In
              </Link>
            </div>
          </fieldset>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
