import React from "react";
import { Image, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import tw from "twrnc";

const onboardingScreens = [
  {
    backgroundColor: "#a7cce8",
    image: <Image source={require("../assets/manu.png")} />,
    title: "Promote Your Products",
    subtitle: "Building Trust Through Quality and Transparency",
  },
  {
    backgroundColor: "#a7cce8",
    image: <Image source={require("../assets/cus.png")} />,
    title: "Verify Your Medicines",
    subtitle: "Ensure the authenticity of your pharmaceuticals.",
  },
];

const OnBoardingScreen = ({ navigation }) => {
  const handleFinish = () => {
    navigation.navigate("LandingPage");
  };

  return (
    <Onboarding
      pages={onboardingScreens}
      onSkip={handleFinish}
      onDone={handleFinish}
      titleStyles={tw`text-black text-2xl font-bold mb-4`}
      subTitleStyles={tw`text-gray-700 text-base`}
    />
  );
};

export default OnBoardingScreen;
