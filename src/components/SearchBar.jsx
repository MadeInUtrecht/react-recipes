import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

const styles = {
    searchbar: `w-1/2 h-10 flex justify-between items-center bg-[#D9D9D9] mx-auto rounded-full mx-auto absolute left-0 right-0`,
    searchbar__input: `px-5 h-10 w-full flex justify-center items-center bg-[#D9D9D9] rounded-full focus:outline-none `,
    searchbar__button: `flex justify-center items-center px-3`,
};

const SearchBar = () => {
  //  const [searchQuery, setSearchQuery] = useState('');
 // const history = useNavigate();

  //const handleSearch = (event) => {
   // event.preventDefault();
   // history.push(`/search?query=${searchQuery}`);
  //};

  return (
    <div className={styles.searchbar}>
          <div className={styles.searchbar__input}>
            
                <input
                type="text"
                placeholder="Search recipes..."
                className={styles.searchbar__input}
                //value={searchQuery}
                //onChange={(event) => setSearchQuery(event.target.value)}
                />
                <button className={styles.searchbar__button} type="submit">
                    <AiOutlineSearch size={24} />
                </button>
            
        </div>
    </div>
  );
}

export default SearchBar;
