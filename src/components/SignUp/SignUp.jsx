import { Button, Typography, Divider } from "@mui/material";
import {useRef} from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {CustomButton} from "../CustomButton.jsx";
import {FormInput} from "../FormInput.jsx";
import {CheckBox} from "../CheckBox.jsx";
import {useNavigate} from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();
    const submitRef = useRef(null);
    const passwordRef = useRef(null);
    const inputRef = useRef(null);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6 text-center space-y-4">
                <img src="./logo.svg" alt="Cook Eat It" className="mx-auto w-24" />

                <Typography variant="h6" className="text-gray-700">Continue with</Typography>

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
                    Create Your Account
                </Typography>

                <form className="space-y-4">
                    <FormInput
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        className="w-full"
                        ref={inputRef}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        className="w-full"
                        ref={passwordRef}
                    />

                    <div className="flex items-center justify-start space-x-2">
                        <CheckBox label="remember me" id="remember" size="small" />
                    </div>

                <CustomButton ref={submitRef} type="submit" color="primary" className="w-full" >
                    Sign up
                </CustomButton>
                </form>

                <Typography variant="body2" className="text-gray-500">
                    Already have an account? <a href="#" onClick={(e)=>{
                    e.preventDefault();
                    navigate('/');
                }} className="text-[var(--primary)] underline">Login</a>
                </Typography>
            </div>
        </div>
    );
}
