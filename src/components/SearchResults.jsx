import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard'; // assuming you have a RecipeCard component to display each recipe


const styles = {
  container: `w-full h-full flex bg-[#FFF] flex-col relative `,
  logoDiv: `flex justify-center items-center bg-transparent z-20 absolute -rotate-20 m:w-[20%] w-[35%] lg:w-[20%] xl:w-[20%] `,
  navbar: `w-full h-20 flex  items-center px-10 `,
  searchbar: `w-1/2 h-10 flex justify-between items-center bg-[#D9D9D9] mx-auto rounded-full mx-auto absolute left-0 right-0`,
  searchbar__input: `px-5 h-10 w-full flex justify-center items-center bg-[#D9D9D9] rounded-full focus:outline-none `,
  searchbar__button: `flex justify-center items-center px-3`,
  gitHub: ` flex justify-center items-center absolute right-7 top-7`,
  recipeContainer: `w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-10`,
  text: `text-2xl font-bold text-black`,
};

function SearchResults({searchQuery}) {
  const [recipes, setRecipes] = useState([]);
  const searchInput = useSelector((state) => state.searchInput);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
      const data = await response.json();
      setRecipes(data.meals);
    };

    fetchRecipes();
  }, [searchInput]);

  const capitalizedSearchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className="flex justify-center items-center">
        <h1 className={styles.text}>{capitalizedSearchInput} Recipes</h1>
      </div>
      <div className={styles.recipeContainer}>
        {recipes && recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default SearchResults;
