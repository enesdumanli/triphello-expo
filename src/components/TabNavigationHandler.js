// @ts-nocheck this file is not typescript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discover from "./Discover";
import Favourites from "./Favourites";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();
export const FavouritesContext = React.createContext(null);

const WelcomeScreen = () => {
  const [favourites, setFavourites] = React.useState([]);
  const [regions, setRegions] = React.useState([]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, setFavourites, regions, setRegions }}
    >
      <Tab.Navigator>
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={24} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: "#D81E5B",
            tabBarActiveBackgroundColor: "#FFFD98",
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cards-heart"
                color={color}
                size={24}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarInactiveTintColor: "#23395B",
            tabBarActiveTintColor: "#D81E5B",
            tabBarActiveBackgroundColor: "#FFFD98",
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={24} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarInactiveTintColor: "#23395B",
            tabBarActiveTintColor: "#D81E5B",
            tabBarActiveBackgroundColor: "#FFFD98",
          }}
        />
      </Tab.Navigator>
    </FavouritesContext.Provider>
  );
};

// from our estimates, you care about the following lines:
// home page that covers the basics of the app

export default WelcomeScreen;
