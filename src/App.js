import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';

const App = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('searchQuery');

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search/:searchQuery' element={<SearchResults searchQuery={searchQuery} />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
  );
};

export default App;
