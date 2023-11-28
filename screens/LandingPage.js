import { View, Text, TouchableOpacity, Pressable } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

const projectId = "aae2119ad287e921a9861d9453296a2b";

const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const LandingPage = () => {
  const { open, close, isConnected, address, provider } =
    useWalletConnectModal();

  useEffect(() => {
    const handleConnection = async () => {
      try {
        if (isConnected) {
          console.log(`Connected Successfully!!`);
        }
      } catch (error) {
        console.error("Error handling connection:", error);
      }
    };

    handleConnection();
  }, [isConnected, provider]);

  const handleButtonPress = () => {
    if (isConnected) {
      provider?.disconnect();
    } else {
      open();
    }
  };

  const navigation = useNavigation();

  const navigateToManufacturer = () => {
    navigation.navigate("LoginScreen");
  };

  const navigateToCustomer = () => {
    navigation.navigate("CustomerPage");
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-3xl font-bold mb-6 text-center`}>
        Welcome to BMAS
      </Text>
      <View style={tw`gap-4 mb-4`}>
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
      <Text style={tw`text-3xl font-bold mb-6 text-center`}>
        Connect Your Wallet
      </Text>
      <TouchableOpacity
        onPress={() => handleButtonPress()}
        style={tw`bg-green-500 p-4 rounded-lg text-center text-white`}
      >
        <Text style={tw`text-xl font-semibold mb-2`}>
          {isConnected ? "Disconnect" : "Connect"}
        </Text>
        <View style={tw`flex`}>
          <View style={{ width: 200 }}>
            <Text numberOfLines={2} ellipsizeMode="tail">
              {isConnected ? address : "Not Connected"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <WalletConnectModal
        isVisible={true}
        onClose={close}
        explorerRecommendedWalletIds={[
          "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
        ]}
        explorerExcludedWalletIds={"ALL"}
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
};

export default LandingPage;
