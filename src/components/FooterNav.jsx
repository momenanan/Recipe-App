import React from 'react';
import {
  Home,
  AutoFixHigh,
  Bookmark,
  Settings,
  Person,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const FooterNav = ({ onTabChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/create') return 'magic';
    if (path === '/homepage') return 'home';
    if (path === '/settings') return 'settings';
    if (path === '/bookmark') return 'bookmark';
    return '';
  };

  const activeTab = getActiveTab();

  const tabs = [
    { id: "magic", icon: <AutoFixHigh />, route: "/create" },
    { id: "bookmark", icon: <Bookmark />, route: "/bookmark" },
    { id: "home", icon: <Home />, route: "/homepage" },
    { id: "settings", icon: <Settings />, route: "/settings" },
    { id: "profile", icon: <Person />, route: "/profile" },
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 to-rose-300 flex justify-around items-center rounded-t-3xl z-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          const handleClick = () => {
            if (tab.route) {
              navigate(tab.route);
              onTabChange && onTabChange(tab.id);
            }
          };

          return isActive ? (
            <div
              key={tab.id}
              className="absolute left-1/2 -translate-x-1/2 -top-6 z-20"
            >
              <button
                onClick={handleClick}
                className="w-16 h-16 rounded-full bg-gradient-to-t from-yellow-300 to-pink-300 flex items-center justify-center shadow-md transition scale-110"
              >
                {React.cloneElement(tab.icon, { className: "text-white" })}
              </button>
            </div>
          ) : (
            <button
              key={tab.id}
              onClick={handleClick}
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
