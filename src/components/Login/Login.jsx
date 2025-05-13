import { Button, Typography, Divider } from "@mui/material";
import { useRef, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { CustomButton } from "../CustomButton.jsx";
import { FormInput } from "../FormInput.jsx";
import { CheckBox } from "../CheckBox.jsx";
import { useNavigate } from "react-router-dom";
import { users } from "../../database/users.js"; // <-- your mock database
import { useDispatch } from 'react-redux';
import {login} from "../../redux/slices/login.js";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();

        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (foundUser) {
            setError("");
            dispatch(login({ name: foundUser.name, email: foundUser.email, country: foundUser.country, dishes: foundUser.dishes , preferences: foundUser.preferences, phone: foundUser.phone, fullName: foundUser.fullName} ));
            navigate('/selectcountry');
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6 text-center space-y-4">
                <img src="./logo.svg" alt="Cook Eat It" className="mx-auto w-24" />

                <Typography variant="h6" className="text-gray-700">Sign In with</Typography>

                <div className="flex gap-3 justify-center">
                    <Button variant="outlined" startIcon={<FaFacebook />} className="capitalize w-1/2">
                        Facebook
                    </Button>
                    <Button variant="outlined" startIcon={<FaGoogle className="text-[#DB4437]" />} className="capitalize w-1/2 text-[#DB4437] border-[#DB4437]">
                        Google
                    </Button>
                </div>

                <Divider>or</Divider>

                <Typography variant="subtitle1" className="font-semibold text-gray-700">
                    Login to your Account
                </Typography>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <FormInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        className="w-full"
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        className="w-full"
                    />

                    <div className="flex items-center justify-start space-x-2">
                        <CheckBox label="remember me" id="remember" size="small" />
                    </div>

                    {error && (
                        <Typography variant="body2" className="text-red-500 text-left">{error}</Typography>
                    )}

                    <CustomButton type="submit" color="primary" className="w-full">
                        Login
                    </CustomButton>
                </form>

                <Typography variant="body2" className="text-gray-500">
                    Don't have an account? <a href="#" onClick={(e) => {
                    e.preventDefault();
                    navigate('/signup');
                }} className="text-[var(--primary)] underline">Sign UP</a>
                </Typography>
            </div>
        </div>
    );
}
