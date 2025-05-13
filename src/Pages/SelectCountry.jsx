import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import SearchInput from '../components/SearchInput';
import RadioBox from '../components/RadioBox';
import CustommButton from '../components/CustommButton';
import { updateCountry } from '../redux/slices/login.js';
import { useState, useEffect } from 'react';

export default function CountrySelection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    if (user?.country) {
      setSelectedCountry(user.country);
    }
  }, [user]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    dispatch(updateCountry(country));

    console.log('Updated DB with country:', country);
  };

  return (
      <div className="min-h-screen bg-[#f4f0eb] font-sans flex items-start justify-center py-8">
        <div className="w-full max-w-md bg-[#f4f0eb] rounded-xl shadow-md px-6 py-4">
          <h1 className="text-center text-lg font-semibold text-teal-900">
            Setting up your Kitchen…
          </h1>

          <h2 className="mt-6 mb-2 text-pink-700 font-semibold text-md">
            Select your Country
          </h2>

          <div className="mb-4">
            <SearchInput placeholderText="Enter your country’s name" />
          </div>

          <div className="mb-4">
            <RadioBox selected={selectedCountry} onChange={handleCountryChange} />
          </div>

          <div className="flex justify-center">
            <CustommButton onClick={() => navigate('/selectkitchen')}>Continue</CustommButton>
          </div>
        </div>
      </div>
  );
}
