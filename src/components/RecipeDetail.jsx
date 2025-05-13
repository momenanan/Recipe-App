import { useParams } from 'react-router-dom';
import RecipeHeader from '../components/RecipeHeader';
import RecipeImage from '../components/RecipeImage';
import { trendingItems } from './TrendingToday.jsx';
import { cards } from './categories.jsx';
import { ingredientsData, instructionsData } from '../data/recipedata';

const allRecipes = [...trendingItems, ...cards];

export default function RecipeDetail() {
  const { title } = useParams();
  const recipe = allRecipes.find((item) => item.title === title);

  if (!recipe) {
    return (
      <div className="p-4 text-center text-red-600 font-bold">
        Recipe not found.
      </div>
    );
  }

  const dotColor = recipe.color?.split('-')[1] || 'green';

  return (
    <div className="bg-[#f4f0eb] min-h-screen font-sans">
      <RecipeHeader title={title} dotColor={dotColor} />
      <RecipeImage image={recipe.image} />

      <div className="px-4">
        <div className="mt-4">
          <h2 className="text-pink-700 font-semibold text-lg">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {ingredientsData[title]?.map((ing, i) => (
              <li key={i}>{ing}</li>
            )) || <li>No ingredients available</li>}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-pink-700 font-semibold text-lg">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {instructionsData[title]?.map((step, i) => (
              <li key={i}>{step}</li>
            )) || <li>No instructions available</li>}
          </ol>
        </div>
      </div>
    </div>
  );
}
