import React from 'react';
import { useLocation } from 'react-router-dom';
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
};

function SearchResults({ onSearchSubmit }) {
  const location = useLocation();
  const searchQuery1 = new URLSearchParams(location.search).get('query');
  const setSearchQuery = useState(searchQuery1);
  // eslint-disable-next-line no-unused-vars
  const handleSearchSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <>
      <Navbar />

      <div className={styles.recipeContainer}>
      </div>
    </>
  );
}

export default SearchResults;
