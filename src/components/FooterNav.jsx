import React from 'react';
import {
  Home,
  AutoFixHigh,
  Bookmark,
  Settings,
  Person,
} from '@mui/icons-material';

const FooterNav = ({ activeTab = "home", onTabChange }) => {
  const tabs = [
    { id: "magic", icon: <AutoFixHigh /> },
    { id: "bookmark", icon: <Bookmark /> },
    { id: "home", icon: <Home /> },
    { id: "settings", icon: <Settings /> },
    { id: "profile", icon: <Person /> },
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 to-rose-300 flex justify-around items-center rounded-t-3xl z-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return isActive ? (
            <div
              key={tab.id}
              className="absolute left-1/2 -translate-x-1/2 -top-6 z-20"
            >
              <button
                onClick={() => onTabChange(tab.id)}
                className="w-16 h-16 rounded-full bg-gradient-to-t from-yellow-300 to-pink-300 flex items-center justify-center shadow-md transition scale-110"
              >
                {React.cloneElement(tab.icon, { className: "text-white" })}
              </button>
            </div>
          ) : (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="text-white opacity-70 hover:opacity-100 transition"
            >
              {tab.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;
