import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { strMeal, strMealThumb, strCategory, strInstructions } = recipe;
  const navigate = useNavigate();

  const navigatetoRecipe = () => {
    navigate(`/recipe/${strMeal}`);
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer" onClick={navigatetoRecipe}>
      <img className="w-full h-48 object-cover" src={strMealThumb} alt={strMeal} />
      <div className="p-4 max-h-[400px] text-ellipsis relative ">
        <h2 className="text-gray-900 font-bold text-2xl">{strMeal}</h2>
        <p className="text-gray-600 text-sm mt-1">{strCategory}</p>
        <p className="text-gray-700 text-base mt-2">{strInstructions}</p>
        <div className="flex justify-center items-center mt-4 bg-gradient-to-b from-white to-gray-300 absolute z-20 bottom-0 left-0 h-[50px] w-full transition ease-in 500ms ">
            <h5 className='font-bold font-[Inter]'>See Recipe</h5>
        </div>
      </div>
    </div>

  );
};

export default RecipeCard;
