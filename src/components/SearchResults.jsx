import React from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
    test: `w-full h-20 flex  items-center px-10 `,
};

function SearchResults() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  return (
    <div className={styles.test}>
      <h1>Search Results for "{searchQuery}"</h1>
      testing
    </div>
  );
}

export default SearchResults;
