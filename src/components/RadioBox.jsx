import React, { useState } from 'react';

const countries = [
  "Argentina", "Australia", "Bangladesh", "Germany", "India",
  "Indonesia", "Iran", "Malaysia", "Mexico", "New Zealand", "Pakistan"
];

const CountryRadioList = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div className="max-w-xs mx-auto bg-[#f4f0eb] p-4 rounded shadow">
      <form className="space-y-1">
        {countries.map((country) => (
          <label
            key={country}
            className="flex items-center justify-between py-2 border-b border-rose-300 cursor-pointer"
          >
            <span className="text-rose-500 text-sm">{country}</span>
            <div className="ml-6">
              <input
                type="radio"
                name="country"
                value={country}
                checked={selectedCountry === country}
                onChange={() => setSelectedCountry(country)}
                className="peer hidden"
                id={country}
              />
              <div className="w-4 h-4 border border-rose-400 peer-checked:bg-rose-500 peer-checked:text-white flex items-center justify-center text-[10px] rounded-sm ml-40">
                {selectedCountry === country && '✓'}
              </div>
            </div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default CountryRadioList;
