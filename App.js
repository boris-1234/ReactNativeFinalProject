import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import BooksNavigator from "./navigation/BookStoreNavigation";

// 1. import:
// combineReducers - merges all reducers (in bigger apps we have more than 1)
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import booksReducer from "./store/reducers/books";

// 2: here we can put all the reducers we have:
const rootReducer = combineReducers({
  books: booksReducer,
});

// 3: create a store with rootReducer
const store = createStore(rootReducer);
const fetchFonts = () => {
  // Font.loadAsync({
  //   "pattaya-regular": require("./assets/fonts/pattaya-Regular.ttf"),
  // });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.warn(error)}
      />
    );
  }

  // 4. wrap TripsNavigator with Provider
  return (
    <Provider store={store} >
      <BooksNavigator style={styles.container} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height:"100%"
  },
  
});

export default App;