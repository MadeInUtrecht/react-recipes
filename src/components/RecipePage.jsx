import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const styles = {
  container: `w-full h-full flex bg-[#FFF] flex-col relative `,
  image: `w-[30%] mx-auto rounded-lg shadow-xl`,
};

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

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        name: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`]
      });
    } else {
      break;
    }
  }

  const instructions = recipe.strInstructions
    .split('\r\n')
    .filter(step => step.trim() !== ''); // Filter out empty steps

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-5">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.image} />
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-row">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                {ingredient.measure} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Steps</h2>
        
          <ol className="list-decimal list-inside">
            {instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
