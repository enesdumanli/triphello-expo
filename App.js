import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigationHandler from "./src/components/TabNavigationHandler";
import LandingPage from "./src/components/LandingPage";
import NearbyCities from "./src/components/NearbyCities";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TabNavigationHandler"
          component={TabNavigationHandler}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NearbyCities"
          component={NearbyCities}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
