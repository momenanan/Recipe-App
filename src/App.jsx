import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage-1';
import RecipeDetail from './components/RecipeDetail';
import Onboardingpage from "./Pages/Onboardingpage.jsx";
import LoginPage from "./components/Login/Login.jsx";
import CountrySelection from "./Pages/SelectCountry.jsx";
import KitchenSetupPage from "./Pages/ImageCardPage.jsx";
import Part5 from "./components/SelectingPreference/Part5.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboardingpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/selectcountry" element={<CountrySelection />} />
        <Route path="/selectkitchen" element={<KitchenSetupPage />} />
        <Route path="/selectpreference" element={<Part5 />} />
        <Route path="/recipe/:title" element={<RecipeDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
