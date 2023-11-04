import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();

  const navigateToManufacturer = () => {
    navigation.navigate("ManufacturerPage");
  };

  const navigateToCustomer = () => {
    navigation.navigate("CustomerPage");
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-3xl font-bold mb-6 text-center`}>
        Welcome to BMAS
      </Text>
      <View style={tw`gap-4`}>
        <TouchableOpacity onPress={() => navigateToManufacturer()}>
          <View style={tw`bg-blue-500 p-4 rounded-lg text-center text-white`}>
            <Text style={tw`text-xl font-semibold mb-2`}>Manufacturer</Text>
            <Text style={tw`text-sm opacity-75`}>
              For pharmaceutical manufacturers
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToCustomer()}>
          <View style={tw`bg-green-500 p-4 rounded-lg text-center text-white`}>
            <Text style={tw`text-xl font-semibold mb-2`}>Customer</Text>
            <Text style={tw`text-sm opacity-75`}>
              For pharmaceutical customers
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;
