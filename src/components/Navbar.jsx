import React from 'react'
import { BsGithub } from 'react-icons/bs'
import SearchBar from './SearchBar'
import Rectangle from '../images/Rectangle.png'
import { useState } from 'react'


const styles = {
    container: `w-full h-full flex bg-[#FFF] flex-col relative `,
    logoDiv: `flex justify-center items-center bg-transparent z-20 absolute -rotate-20 m:w-[20%] w-[35%] lg:w-[20%] xl:w-[20%] `,
    navbar: `w-full h-20 flex  items-center px-10 `,
    searchbar: `w-1/2 h-10 flex justify-between items-center bg-[#D9D9D9] mx-auto rounded-full mx-auto absolute left-0 right-0`,
    searchbar__input: `px-5 h-10 w-full flex justify-center items-center bg-[#D9D9D9] rounded-full focus:outline-none `,
    searchbar__button: `flex justify-center items-center px-3`,
    gitHub: ` flex justify-center items-center absolute right-7 top-7`,
}

const Navbar = ({onSearchSubmit}) => {
  //eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <>
    <div className={styles.container}>
      <img className={styles.logoDiv} src={Rectangle} alt='decoration' />
      <div className={styles.navbar}>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      <div className={styles.gitHub}>
        <BsGithub size={32} />
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar