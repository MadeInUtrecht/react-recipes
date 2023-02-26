import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const styles = {
    container: `w-full h-full flex bg-[#FFF] flex-col relative `,
    image: `w-[30%] mx-auto `,
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

  return (
    <div className={styles.container}>
      <Navbar />
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.image} />
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Steps</h2>
          <ol className="list-decimal list-inside">
            {recipe.strInstructions.split('\r\n').map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
