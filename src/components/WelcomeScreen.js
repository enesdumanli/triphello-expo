// @ts-nocheck this file is not typescript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "./MainPage";
import FindCity from "./FindCity";
import React from "react";

const Tab = createBottomTabNavigator();
export const FavouritesContext = React.createContext(null);

const WelcomeScreen = () => {
  const [favourites, setFavourites] = React.useState([]);

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Messages"
          component={FindCity}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </FavouritesContext.Provider>
  );
};

export default WelcomeScreen;
