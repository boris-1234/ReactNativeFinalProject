import React from "react";
import { Button } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";


// 1. remove:
//import { TRIPS } from "../data/dummy-data";
// 2. import:

function PayCompleateScreen(props) {
    if(!props)
    alert('props null');
    return <div style={{backgroundColor:'#3285a8'}}><h1>We recieved your order, You can continue to buy</h1>


    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
      
          title="Menu"
          iconName="ios-arrow-back"
          onPress={() => props.navigation.navigate({routeName: "Categories"})}
        />
      </HeaderButtons>
    </div>;
  }

export default PayCompleateScreen;



