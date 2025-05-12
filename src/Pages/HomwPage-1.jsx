import React from 'react';
import Logo from './components/Logo';
import SearchInput from './components/SearchInput';
import TrendingToday from './components/TrendingToday';
import CategoriesSection from './components/categories';
import VerifiedChefs from './components/VerifiedChefs';
import FooterNav from './components/FooterNav';

export default function HomePage() {
  return (
    <div className="bg-[#f4f0eb] min-h-screen font-sans flex flex-col justify-between">
      <div className="px-4 pt-6 pb-24 space-y-6 sm:px-6 md:px-8">
        
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            <span className="text-rose-500">Hungry?</span> Choose a dish...
          </h1>
          <Logo />
        </div>

        <SearchInput />

        <TrendingToday />

        <CategoriesSection />

        <VerifiedChefs />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#f4f0eb] sm:static sm:bg-transparent">
        <FooterNav />
      </div>
    </div>
  );
}
