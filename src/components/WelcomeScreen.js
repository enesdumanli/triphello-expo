// @ts-nocheck this file is not typescript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "./MainPage";
import FindCity from "./FindCity";

const Tab = createBottomTabNavigator();

const WelcomeScreen = () => {
  return (
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
  );
};

export default WelcomeScreen;
