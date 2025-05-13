import { ArrowBack } from '@mui/icons-material';

export default function RecipeHeader({ title, dotColor }) {
  return (
    <div className="flex items-center justify-between px-4 mt-4">
      <div className="flex items-center">
        <ArrowBack className="text-teal-800 mr-2" />
        <div className={`w-3 h-3 rounded-full bg-${dotColor}-500 mr-2`}></div>
        <h2 className="font-bold text-lg text-teal-900">{title}</h2>
      </div>
      <img src="/logo.png" alt="Logo" className="w-12 h-12" />
    </div>
  );
}
