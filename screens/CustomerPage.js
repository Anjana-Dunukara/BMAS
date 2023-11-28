import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

const QRScanScreen = () => {
  const navigation = useNavigation();

  const navigateToCustomerPage = () => {
    navigation.navigate("CustomerPage");
  };

  const handleQRCodeRead = (event) => {
    console.log("Scanned QR Code:", event.data);

    navigateToCustomerPage();
  };

  return (
    <QRCodeScanner
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{" "}
          on your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent("default", () => QRScanScreen);
