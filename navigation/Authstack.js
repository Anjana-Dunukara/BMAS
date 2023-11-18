import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../screens/LandingPage";
import CustomerPage from "../screens/CustomerPage";
import ManufacturerPage from "../screens/ManufacturerPage";
import AddProductPage from "../screens/AddProductPage";
import ListProductsScreen from "../screens/ListProductsScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CustomerPage" component={CustomerPage} />
      <Stack.Screen name="ManufacturerPage" component={ManufacturerPage} />
      <Stack.Screen name="AddProductPage" component={AddProductPage} />
      <Stack.Screen name="ListProductsScreen" component={ListProductsScreen} />
      <Stack.Screen name="RequestCreation" component={AddProductPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
