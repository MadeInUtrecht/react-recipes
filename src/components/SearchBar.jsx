import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const styles = {
    searchbar: `w-1/2 h-10 flex justify-between items-center bg-[#D9D9D9] mx-auto rounded-full mx-auto absolute left-0 right-0`,
    searchbar__input: `px-5 h-10 w-full flex justify-center items-center bg-[#D9D9D9] rounded-full focus:outline-none active:outline-none `,
    searchbar__button: `flex justify-center items-center px-3`,
};

const SearchBar = ({onSearchSubmit}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchInput.value;
    onSearchSubmit(searchQuery);
    dispatch({ type: 'SET_SEARCH_INPUT', payload: searchQuery });
    navigate(`/search/${searchQuery}`)
  };

  return (
    <div className={styles.searchbar}>
            <form onSubmit={handleSubmit} className={styles.searchbar__input}>
                <input
                type="text"
                placeholder="Search recipes..."
                className={styles.searchbar__input}
                name="searchInput"
                />
                <button className={styles.searchbar__button} type="submit">
                    <AiOutlineSearch size={24} />
                </button>
            </form>
    </div>
  );
}

export default SearchBar;
