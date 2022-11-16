// @ts-nocheck this file is not typescript
import React, { useEffect } from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { SvgUri } from "react-native-svg";

const LandingPage = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("WelcomeScreen");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.innerContainer}
        source={require("../utils/wallpaper.jpg")}
      >
        <SvgUri
          style={{ alignSelf: "center", top: 100 }}
          width="100"
          height="100"
          uri="https://svgshare.com/i/oBX.svg"
        />
        <Text style={styles.text}>TripHello</Text>
        {/*         <Triphello style={styles.logo} width={140} height={140} />
         */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "rgb(128, 159, 209)",
    textAlign: "center",
    top: 100,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
  },
  logo: { bottom: "55%" },
});

export default LandingPage;
