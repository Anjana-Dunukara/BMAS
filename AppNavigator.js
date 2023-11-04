// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./components/LandingPage";
import CustomerPage from "./components/CustomerPage";
import ManufacturerPage from "./components/ManufacturerPage";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CustomerPage" component={CustomerPage} />
      <Stack.Screen name="ManufacturerPage" component={ManufacturerPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
