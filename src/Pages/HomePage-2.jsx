import { useParams } from 'react-router-dom';
import RecipeHeader from './components/RecipeHeader';
import RecipeImage from './components/RecipeImage';
import RecipeDetails from './components/RecipeDetail';
import { trendingItems } from './components/TrendingToday';
import { cards } from './components/categories';
import { ingredientsData, instructionsData } from './data/recipeData';

export default function RecipePage() {
  const { title } = useParams();
  const allRecipes = [...trendingItems, ...cards];
  const recipe = allRecipes.find((item) => item.title === title);

  const dotColor =
    recipe?.color?.replace('bg-', '').replace('-500', '') || 'green';

  if (!recipe) {
    return <div className="text-center text-red-500 mt-10">Recipe not found</div>;
  }

  return (
    <div className="bg-[#fbf7f2] min-h-screen">
      <RecipeHeader title={recipe.title} dotColor={dotColor} />
      <RecipeImage image={recipe.image} />
      <RecipeDetails
        ingredients={ingredientsData[title] || []}
        instructions={instructionsData[title] || []}
      />
    </div>
  );
}
