import React from "react";
import { Text, View, ImageBackground } from "react-native";

const FindCity = () => {
  return (
    <ImageBackground
      style={{
        justifyContent: "center",
        paddingHorizontal: 60,
        height: "100%",
      }}
      source={require("../utils/wallpaper.jpg")}
    >
      <Text>Deneme</Text>
    </ImageBackground>
  );
};

export default FindCity;
