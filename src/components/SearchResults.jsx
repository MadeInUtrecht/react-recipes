import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';



const styles = {
  container: `w-full h-full flex bg-[#FFF] flex-col relative `,
  logoDiv: `flex justify-center items-center bg-transparent z-20 absolute -rotate-20 m:w-[20%] w-[35%] lg:w-[20%] xl:w-[20%] `,
  navbar: `w-full h-20 flex  items-center px-10 `,
  searchbar: `w-1/2 h-10 flex justify-between items-center bg-[#D9D9D9] mx-auto rounded-full mx-auto absolute left-0 right-0`,
  searchbar__input: `px-5 h-10 w-full flex justify-center items-center bg-[#D9D9D9] rounded-full focus:outline-none `,
  searchbar__button: `flex justify-center items-center px-3`,
  gitHub: ` flex justify-center items-center absolute right-7 top-7`,
  recipeContainer: `w-full h-full grid grid-cols-4 grid-rows-4 gap-4 p-10`,
  text: `text-2xl font-bold text-black`,
};

function SearchResults({searchQuery}) {
  const setSearchQuery = useState(searchQuery);
  const handleSearchSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);


  return (
    <>
      <Navbar onSearchSubmit={handleSearchSubmit} />

      <div className={styles.recipeContainer}>
        <div>tetststs</div>
        <h1 className={styles.text}>test{searchQuery}</h1>

      </div>
    </>
  );
}

export default SearchResults;
