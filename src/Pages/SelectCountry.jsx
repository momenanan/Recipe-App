import SearchInput from '../components/SearchInput';
import RadioBox from '../components/RadioBox';
import CustommButton from '../components/CustommButton';

export default function CountrySelection() {
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
          <SearchInput />
        </div>

        <div className="mb-4">
          <RadioBox />
        </div>

        <div className="flex justify-center">
          <CustommButton />
        </div>
      </div>
    </div>
  );
}
