import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import AddProductPage from "./AddProductPage";

const ManufacturerPage = ({ navigation }) => {
  const navigateToAddProduct = () => {
    navigation.navigate("AddProductPage");
  };

  const navigateToListProducts = () => {
    navigation.navigate("ListProductsScreen");
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <View style={tw`gap-4`}>
        <TouchableOpacity onPress={navigateToAddProduct}>
          <View style={tw`bg-blue-500 p-4 rounded-lg text-center text-white`}>
            <Text style={tw`text-xl font-semibold mb-2`}>Add Product</Text>
            <Text style={tw`text-sm opacity-75`}>
              Add a new pharmaceutical product
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToListProducts}>
          <View style={tw`bg-green-500 p-4 rounded-lg text-center text-white`}>
            <Text style={tw`text-xl font-semibold mb-2`}>List Products</Text>
            <Text style={tw`text-sm opacity-75`}>
              View and manage existing products
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManufacturerPage;
