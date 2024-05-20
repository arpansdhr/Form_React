import { useState } from 'react';
import { TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import './ResetPassword.css';

const ResetPassword = () => {
    const [password, setPassword] = useState({ value: "", isTouched: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", isTouched: false });
    const [isLoading, setIsLoading] = useState(false);

    const getIsFormValid = () => {
        return (
            password.value.length >= 8 &&
            password.value === confirmPassword.value
        );
    };

    const clearForm = () => {
        setPassword({ value: "", isTouched: false });
        setConfirmPassword({ value: "", isTouched: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading
        // Simulate asynchronous operation, like API call
        setTimeout(() => {
            alert("Password reset successful");
            clearForm();
            setIsLoading(false); //Stop loading
        }, 1000);
    };
    return (
        <>
            <Box className="resetpassword-container">
                <form onSubmit={handleSubmit}>
                    <fieldset className="resetpassword-fieldset">
                        <h1 className="resetpassword-title">Reset Password</h1>
                        <div className="resetpassword-input">
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
                        <div className='resetpassword-input'>
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
                        <div className="resetpassword-button-container">
                            <LoadingButton
                                type="submit"
                                disabled={!getIsFormValid()}
                                variant="contained"
                                color="primary"
                                loading={isLoading}
                            >
                                Reset
                            </LoadingButton>
                        </div>
                    </fieldset>
                </form>
            </Box>
        </>
    )
}

export default ResetPassword;
