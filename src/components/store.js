import { createStore } from 'redux';

const initialState = {
  searchInput: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_INPUT':
      return {
        ...state,
        searchInput: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
