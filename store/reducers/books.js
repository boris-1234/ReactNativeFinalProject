import { BOOKS } from "../../data/dummy-data";
// 1. import:
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/books";

const initialState = {
  books: BOOKS,
  filteredBooks: BOOKS,
  favoriteBooks: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteBooks.findIndex(
        (book) => book.id === action.bookId
      );
      if (existingIndex >= 0) {
        const updatedFavbooks = [...state.favoriteBooks];
        updatedFavbooks.splice(existingIndex, 1);
        return { ...state, favoriteBooks: updatedFavbooks };
      } else {
        const book = state.books.find((book) => book.id === action.bookId);
        return { ...state, favoriteBooks: state.favoriteBooks.concat(book) };
      }
    // 2.SET_FILTERS:
    case SET_FILTERS:
      // extract filter from the actions:
      const appliedFilters = action.filters;
      // all trips available:
      // Example: if im looking for glutenFree trip, and !trip.isGlutenFree -> trip is not:
      // drop it from the list. same to all other options:
      const updatedFilteredBooks = state.books.filter((book) => {
        if (appliedFilters.glutenFree && !book.isGlutenFree) return false;
        if (appliedFilters.lactoseFree && !book.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !book.isVegetarian) return false;
        if (appliedFilters.vegan && !book.isVegan) return false;
        // only if trip applies all filters:
        return true;
      });
      // return state to upadted array:
      return { ...state, filteredBooks: updatedFilteredBooks };
    default:
      return state;
  }
};

export default booksReducer;