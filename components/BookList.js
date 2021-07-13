import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import BookItem from "./BookItem";

const BookList = props => {
  const renderBookItem = (itemData) => {
      return <BookItem
      title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      image={itemData.item.imageUrl}
      onSelectBook={() => {
        props.navigation.navigate({
          routeName: "BookDetail",
          params: {
            bookId: itemData.item.id,
             // Add:
             bookTitle: itemData.item.title
          },
        });
      }}/>
    };
  return (
    <View style={styles.container}>
      <FlatList
        //   change the data from props.
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default BookList;