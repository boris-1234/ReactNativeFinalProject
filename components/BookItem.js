import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// 2. add style. -> numberOfLines={1} if text is large - make is shorter. (only 1 row)

const BookItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectBook}>
      <View style={styles.bookItem}>
        <View style={styles.bookRow, styles.bookHeader }>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={ styles.bookRow, styles.bookDetail ,styles.text }>
          <Text>{props.duration}</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  bookRow: {
    flexDirection: "row",
  },
  bookHeader: {
    height: "15%",
  },
  bookDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  // Add style to title:
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)", // black color, bit transparent (0.5)
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "pattaya-regular",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  text:{
    textAlign :"center",
  }
});

export default BookItem;