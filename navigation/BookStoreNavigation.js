import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryScreen from "../screens/CategoryScreen";
import CategoryBookScreen from "../screens/CategoryBookScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import FavoriteBookScreen from "../screens/FavoriteBookScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

//added
import PayCompleateScreen from "../screens/PayCompleateScreen";
// import:
import { createDrawerNavigator } from "react-navigation-drawer";
import Payment from "../screens/Payment";
//import FiltersScreen from "../screens/FiltersScreen";

// const MyPayNavigator=createStackNavigator(
//   {
//     PayComplete: PayCompleateScreen
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );









const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white',
  headerTitle: "A Screen",
};

const BooksNavigator = createStackNavigator(
  {
    Categories: CategoryScreen,
    CategoryBook: {
      screen: CategoryBookScreen,
    },
    BookDetail: BookDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteBookScreen,
    BookDetail: BookDetailScreen,
    Categories: CategoryScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const BooksFavTabNavigator = createBottomTabNavigator(
  {
    Books: {
      screen: BooksNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-book"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "My Cart",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-cart" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

// Now is the time to use FiltersScreen
// 3. Create createStackNavigator
const FiltersNavigator = createStackNavigator({
  Payments: Payment,
  PayComplete: PayCompleateScreen
});

const MainNavigator = createDrawerNavigator(
  {
    booksFavs: {
      screen: BooksFavTabNavigator,
      
      navigationOptions: {
        // Change title name
        drawerLabel: "Books",
      },
    },
    Payments: FiltersNavigator,
   // MM:MyPayNavigator
  },
 
  // We can add third argument that defines the navigator itself:
  // Change the entire font-family and color
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
      labelStyle: {
        // Change font-family
        fontFamily: "pattaya-regular",
      },
    },
  }
);

// 5. export the MainNavigator
export default createAppContainer(MainNavigator);