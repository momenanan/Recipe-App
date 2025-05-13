import { Avatar, IconButton } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import { CustomButton } from "../CustomButton.jsx";
import { FormInput } from "../FormInput.jsx";
import EmailIcon from "../../assets/email-icon.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import { useRef } from "react";

export default function Profile() {
  const button = useRef(null);

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f8f4]">
        <div className="w-[320px] text-center space-y-6">
          <h2 className="text-xl font-semibold text-[#1e4d4d]">Setting up your Kitchen...</h2>
          <h3 className="text-lg font-semibold text-[#f55b7a]">Create your Profile</h3>

          <div className="relative w-fit mx-auto">
            <Avatar src="" sx={{ width: 96, height: 96 }} className="mx-auto" />
            <IconButton
                size="small"
                className="!absolute bottom-0 right-0 bg-white shadow-md"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </div>

          <form className="space-y-4 text-left">
            <FormInput
                label="Username"
                placeholder="Enter your Username"
                isRequired
            />

            <FormInput
                label="Full Name"
                placeholder="Enter your Full Name"
                isRequired
            />

            <FormInput
                label="Email ID"
                placeholder="Enter your Email"
                isRequired
                icon={EmailIcon}
                defaultValue="uiuxdivyanshu@gmail.com"
            />

            <FormInput
                label="Phone No."
                placeholder="Enter your Phone Number"
                isRequired
                icon={PhoneIcon}
            />

            <CustomButton
                variant="contained"
                fullWidth
                className="!bg-[#f55b7a] !rounded-full !text-white !mt-4 hover:!bg-[#e84a6a]"
                ref={button}
            >
              Continue
            </CustomButton>
          </form>
        </div>
      </div>
  );
}
