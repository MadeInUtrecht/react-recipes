import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const [recipe, setRecipe] = useState(null);

  const { recipeId } = useParams();

  useEffect(() => {
  const fetchRecipe = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeId}`);
    const data = await response.json();
    setRecipe(data.meals?.[0]);
  };

  fetchRecipe();
}, [recipeId]);


  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipePage;
