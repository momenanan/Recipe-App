import React, { useState } from 'react';
import {
  LockOutlined,
  NotificationsNone,
  SupervisedUserCircle,
  HelpOutline,
  InfoOutlined,
  Facebook,
  Twitter,
  Instagram,
} from '@mui/icons-material';
import { Switch } from '@mui/material';

import Logo from '../components/Logo';
import FooterNav from '../components/FooterNav';
import {CustomButton} from '../components/CustommButton.jsx';


const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [themeLight, setThemeLight] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8f6f2] px-5 py-3 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-[#e85455]">Settings</h2>
          <Logo /> 
        </div>

        {/* Settings List */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-[#053B50]">
            <LockOutlined />
            <p className="text-md">Privacy</p>
          </div>

          <div className="flex items-center justify-between text-[#053B50]">
            <div className="flex items-center gap-3">
              <NotificationsNone />
              <p className="text-md">Notifications</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-black">ON</span>
              <Switch
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                color="primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#053B50]">
            <SupervisedUserCircle />
            <p className="text-md">Supervision</p>
          </div>

          <div className="flex items-center gap-3 text-[#053B50]">
            <HelpOutline />
            <p className="text-md">Help</p>
          </div>

          <div className="flex items-center gap-3 text-[#053B50]">
            <InfoOutlined />
            <p className="text-md">About</p>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between text-[#053B50]">
            <div className="flex items-center gap-3">
              <p className="text-md">Theme</p>
            </div>
            <div className="flex items-center gap-2 bg-green-300 px-3 py-1 rounded-full">
              <span className="text-xs text-[#053B50] font-medium">Light</span>
              <Switch
                checked={themeLight}
                onChange={() => setThemeLight(!themeLight)}
                color="default"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8">
  <CustomButton
    color="primary"
    className="w-full rounded-full"
    onClick={() => console.log('Save Changes clicked')}
  >
    Save Changes
  </CustomButton>
</div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-5 mt-10">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-[#053B50]">
          <Facebook className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
          <Instagram className="cursor-pointer" />
        </div>

        <FooterNav />
      </div>
    </div>
  );
};

export default SettingsPage;
