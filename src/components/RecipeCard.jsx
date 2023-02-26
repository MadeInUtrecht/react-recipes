import React from 'react';

const RecipeCard = ({ recipe }) => {
  const { strMeal, strMealThumb, strCategory, strInstructions } = recipe;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={strMealThumb} alt={strMeal} />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-2xl">{strMeal}</h2>
        <p className="text-gray-600 text-sm mt-1">{strCategory}</p>
        <p className="text-gray-700 text-base mt-2">{strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;