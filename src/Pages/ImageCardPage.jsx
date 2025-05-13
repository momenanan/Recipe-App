// pages/KitchenSetupPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CustommButton from '../components/CustommButton';
import { updateDishes } from '../redux/slices/login.js';
import ImageCardSelector from "../components/ImageCard.jsx";

const KitchenSetupPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);
    const reduxDishes = user?.dishes || [];

    const [selectedItems, setSelectedItems] = useState(reduxDishes);

    useEffect(() => {
        setSelectedItems(reduxDishes);
    }, [reduxDishes]);

    const handleSelectionChange = (items) => {
        setSelectedItems(items);
        dispatch(updateDishes(items));
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                Setting up your kitchen...
            </h1>

            <h2 className="text-xl text-gray-600 mb-8 ml-8">
                Select your preferences
            </h2>

            <ImageCardSelector
                selected={selectedItems}
                onSelectionChange={handleSelectionChange}
            />

            <div className="mt-10 flex justify-center">
                <CustommButton
                    onClick={() => navigate('/selectpreference')}
                    disabled={selectedItems.length !== 3}
                >
                    Continue
                </CustommButton>
            </div>
        </div>
    );
};

export default KitchenSetupPage;
