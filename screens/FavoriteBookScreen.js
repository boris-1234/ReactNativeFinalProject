import React from "react";
import BookList from "../components/BookList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useState } from "react";
// 1. remove:
//import { TRIPS } from "../data/dummy-data";
// 2. import:
import { useSelector } from "react-redux";
import { Text, TextInput, Button } from "react-native";


const FavoritesScreen = (props) => {
  // 3. change favTrips: to useSelector
  const favBookss = useSelector((state) => state.books.favoriteBooks);
  const [cupon, setCupon] = useState('');
  function btnConfirm() {
    switch (cupon) {
      case '123': piceToSHow = parseInt(sum) * 0.95; break;
      case '124': piceToSHow = parseInt(sum) * 0.90; break;
      case '125': piceToSHow = parseInt(sum) * 0.85; break;
    }
    document.getElementById('price').innerText = "Total Price: " + piceToSHow
  }

  var sum = 0;
  var piceToSHow = 0
  return <div>
    {
      favBookss.map((e, i) => {
        // return (
        sum += parseInt(e.complexity)
        piceToSHow = sum
        // )
      })
    }

    <BookList listData={favBookss} navigation={props.navigation} />
    <h3 id="price">Total Price: {piceToSHow}</h3>
    <Text >Do you have a cupon?, you can recieve up to 15% discount</Text>
    <br></br>
    <br></br>
    <TextInput
      onChangeText={(cupon) => setCupon(cupon)}
      value={cupon}
      //style={inputStyle}
      placeholder="Enter Cupon Code" />
    <br></br>
    <br></br>
    <Button onPress={btnConfirm} title='Confirm'></Button>
  </div>;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Shopping Cart",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;