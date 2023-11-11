import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";
import tw from "twrnc";

const ListProductsScreen = ({ navigation }) => {
  const [manufacturerId, setManufacturerId] = useState("");
  const [productName, setProductName] = useState("");
  const [productSN, setProductSN] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = () => {
    // Define the server endpoint where you will send the product information.
    const serverEndpoint = "http://127.0.0.1:3000/api/products";

    // Create the product data (modify this structure according to your server's expectations).
    const productData = {
      manufacturerId,
      productName,
      productSN,
      productBrand,
      productPrice,
    };

    // Use Axios to send a POST request.
    axios
      .post(serverEndpoint, productData)
      .then((response) => {
        // Product was added successfully
        console.log("Product added successfully");
      })
      .catch((error) => {
        // Handle request errors, including network errors and server errors.
        if (error.response) {
          console.error("Server Error:", error.response.data);
        } else if (error.request) {
          console.error("No response received");
        } else {
          console.error("Network Error:", error.message);
        }
      });
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Add Product</Text>
      <TextInput
        style={tw`w-64 h-10 border border-gray-300 mb-4 p-2`}
        placeholder="Manufacturer ID"
        onChangeText={(text) => setManufacturerId(text)}
        value={manufacturerId}
      />
      <TextInput
        style={tw`w-64 h-10 border border-gray-300 mb-4 p-2`}
        placeholder="Product Name"
        onChangeText={(text) => setProductName(text)}
        value={productName}
      />
      <TextInput
        style={tw`w-64 h-10 border border-gray-300 mb-4 p-2`}
        placeholder="Product SN"
        onChangeText={(text) => setProductSN(text)}
        value={productSN}
      />
      <TextInput
        style={tw`w-64 h-10 border border-gray-300 mb-4 p-2`}
        placeholder="Product Brand"
        onChangeText={(text) => setProductBrand(text)}
        value={productBrand}
      />
      <TextInput
        style={tw`w-64 h-10 border border-gray-300 mb-4 p-2`}
        placeholder="Product Price"
        onChangeText={(text) => setProductPrice(text)}
        value={productPrice}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

export default ListProductsScreen;
