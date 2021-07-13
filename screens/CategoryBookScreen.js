import React from "react";
import BookList from "../components/BookList";

// 1. Here we import TRIPS - so delete it, and use redux instead
//import { COUNTRIES, TRIPS } from '../data/dummy-data';
import { CATEGORIES } from "../data/dummy-data";

// 2. import:
import { useSelector } from "react-redux";

const CategoryBookScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  

  // 3. we will use this instead of `TRIPS`.
  // we want to get the filteredTrips (from initialState)
  const availableBooks = useSelector((state) => state.books.filteredBooks);

  // change to availableTrips
  const displayedBooks = availableBooks.filter(
    (book) => book.categoryIds.indexOf(categoryId) >= 0
    
  );

  return <BookList listData={displayedBooks} navigation={props.navigation} />;
};

CategoryBookScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryBookScreen;