import { useRef, useState, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../CustomButton.jsx";
import {updatePreferences} from "../../redux/slices/login.js";
import {useNavigate} from "react-router-dom";

const categories = [
    "Healthy", "Fast Food", "Quick", "Cuisine", "Breakfast", "Snack",
    "Lunch", "Dinner", "Dessert", "Soup", "Drink", "Traditional"
];
const meatDishes = ["Beef", "Chicken", "Mutton", "Fish", "Prawns"];

export default function Part5() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const initialPrefs = user?.preferences || { categories: [], meats: [] };
    const [isVeg, setIsVeg] = useState(initialPrefs.meats.length === 0);
    const [selectedCategories, setSelectedCategories] = useState([
        ...initialPrefs.categories,
        ...initialPrefs.meats,
    ]);
    const [heads, setHeads] = useState(3);
    const [notifications, setNotifications] = useState(true);
    const button = useRef(null);

    const toggleCategory = (cat) => {
        const updated = selectedCategories.includes(cat)
            ? selectedCategories.filter((c) => c !== cat)
            : [...selectedCategories, cat];

        setSelectedCategories(updated);

        const preferences = {
            categories: updated.filter((item) => categories.includes(item)),
            meats: updated.filter((item) => meatDishes.includes(item)),
        };

        dispatch(updatePreferences(preferences));
    };
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f9f8f4] px-4">
            <div className="w-[340px] space-y-6 text-center">
                <h2 className="text-xl font-semibold text-[#1e4d4d]">
                    Setting up your Kitchen...
                </h2>
                <h3 className="text-lg font-semibold text-[#f55b7a]">
                    Select your preferences
                </h3>

                <div
                    onClick={() => {
                        setIsVeg(!isVeg);
                        if (isVeg) {
                            return;
                        } else {
                            const updated = selectedCategories.filter(
                                (item) => !meatDishes.includes(item)
                            );
                            setSelectedCategories(updated);
                            dispatch(
                                updatePreferences({
                                    categories: updated.filter((item) => categories.includes(item)),
                                    meats: [],
                                })
                            );
                        }
                    }}
                    className={`cursor-pointer rounded-full w-32 h-8 mx-auto flex items-center justify-${isVeg ? "start" : "end"} px-1 bg-gradient-to-r from-green-400 to-green-200 relative`}
                >
          <span className="text-white font-semibold z-10 w-full text-xs text-center">
            {isVeg ? "VEG" : "NON-VEG"}
          </span>
                    <div className="w-6 h-6 bg-black rounded-full z-20" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat, idx) => {
                        const selected = selectedCategories.includes(cat);
                        return (
                            <button
                                key={idx}
                                onClick={() => toggleCategory(cat)}
                                className={`flex items-center justify-start px-3 py-2 rounded-md text-sm font-medium transition ${
                                    selected
                                        ? "bg-orange-400 text-white"
                                        : "bg-orange-100 text-gray-800"
                                }`}
                            >
                                <div
                                    className={`w-3 h-3 rounded-full mr-2 ${
                                        selected ? "bg-teal-600" : "bg-gray-300"
                                    }`}
                                />
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {!isVeg && (
                    <div className="grid grid-cols-2 gap-3">
                        {meatDishes.map((meat, idx) => {
                            const selected = selectedCategories.includes(meat);
                            return (
                                <button
                                    key={idx}
                                    onClick={() => toggleCategory(meat)}
                                    className={`flex items-center justify-start px-3 py-2 rounded-md text-sm font-medium transition ${
                                        selected
                                            ? "bg-orange-400 text-white"
                                            : "bg-orange-100 text-gray-800"
                                    }`}
                                >
                                    <div
                                        className={`w-3 h-3 rounded-full mr-2 ${
                                            selected ? "bg-red-600" : "bg-teal-600"
                                        }`}
                                    />
                                    {meat}
                                </button>
                            );
                        })}
                    </div>
                )}

                <div className="flex items-center justify-between mt-4 px-4 text-sm font-medium text-gray-700">
                    <span>Default hungry heads:</span>
                    <div className="flex items-center bg-pink-100 px-3 py-1 rounded-full space-x-3">
                        <button
                            onClick={() => setHeads((h) => Math.max(1, h - 1))}
                            className="text-pink-600"
                        >
                            <FiMinus />
                        </button>
                        <span>{heads}</span>
                        <button
                            onClick={() => setHeads((h) => h + 1)}
                            className="text-pink-600"
                        >
                            <FiPlus />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 text-sm font-medium text-gray-700">
                    <span>New Dish Notification:</span>
                    <div
                        className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${notifications ? "bg-teal-500" : "bg-gray-300"}`}
                        onClick={() => setNotifications(!notifications)}
                    >
                        <div
                            className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${notifications ? "translate-x-7" : "translate-x-0"}`}
                        />
                        <span className="absolute left-2 text-xs text-white font-bold">
              {notifications ? "ON" : "OFF"}
            </span>
                    </div>
                </div>

                <CustomButton ref={button} onClick={()=> navigate('/profile')} color="secondary" className="w-full mt-8">
                    Continue
                </CustomButton>
            </div>
        </div>
    );
}
