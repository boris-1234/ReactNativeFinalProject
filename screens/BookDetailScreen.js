import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
// import:
import { toggleFavorite } from "../store/actions/books";

// Add useDispatch
import { useSelector, useDispatch } from "react-redux";

const BookDetailScreen = (props) => {
  const availableBooks = useSelector((state) => state.books.books);
  const bookId = props.navigation.getParam("bookId");

  // 1. Add check: to get the state
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
  // check if tripId -> the current trip - is part of our favorites
  const currentBookIsFavorite = useSelector((state) =>
    state.books.favoriteBooks.some((book) => book.id === bookId)
  );

  const selectedBook = availableBooks.find((book) => book.id === bookId);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(bookId));
  }, [dispatch, bookId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  // Add another useEffect ->
  // Run after every cycle: update the isFav. We will use isFav in navigationOptions
  useEffect(() => {
    props.navigation.setParams({ isFav: currentBookIsFavorite });
  }, [currentBookIsFavorite]);

  return (

    <ScrollView>
        <View style={styles.wrapper}>
          <Image source={{ uri: selectedBook.imageUrl }} style={styles.image} />
        </View>
      <View style={ styles.bookRow, styles.bookDetail ,styles.TextDescription}>
        <Text>Criticism:{selectedBook.duration}</Text>
        <Text>Price:{selectedBook.complexity.toUpperCase()}</Text>
        <Text>Shipping:{selectedBook.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Wight And Size</Text>
      <View style={styles.listItem}>
        <Text>{selectedBook.description}</Text>
      </View>
      <Text style={styles.title}>Description</Text>
      {selectedBook.steps.map((step) => (
        <View style={styles.listItem}>
          <Text key={step}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
BookDetailScreen.navigationOptions = (navigationData) => {
  const bookTitle = navigationData.navigation.getParam("bookTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");

  // Add variable to get isFav
  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: bookTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          // instead of always rendering ios-star:
          // render full / empty:
          // iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          iconName={isFavorite ? "ios-cart" : "ios-cart-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  wrapper2: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
    
  },
  wrapper: {
    paddingLeft :400 ,
    paddingTop : 30,  
  },
  image: {
    // position: 'absolute',
    width: 600,
    height: 780,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  TextDescription:{
    textAlign:"center",
  }
});

export default BookDetailScreen;