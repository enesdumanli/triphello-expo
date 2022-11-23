import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SvgUri } from "react-native-svg";

const NearbyCities = ({ route, navigation }) => {
  const { nearbyCities, baseCountry } = route.params;

  route;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.innerContainer}
        source={require("../utils/wallpaper.jpg")}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            style={{ top: 50, right: 160 }}
            size={30}
            color={"black"}
          />
        </TouchableOpacity>
        <SvgUri
          style={{ alignSelf: "center", top: 100 }}
          width="100"
          height="100"
          uri="https://svgshare.com/i/oBX.svg"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
            marginTop: 70,
            color: "#F34213",
          }}
        >
          {baseCountry} is great!
        </Text>
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontWeight: "500",
            fontSize: 16,
            paddingHorizontal: 10,
            color: "#000F08",
          }}
        >
          There are plenty of other cities in {baseCountry} to visit. Here are
          some of them:
        </Text>

        <FlatList
          style={{ marginTop: 10 }}
          data={nearbyCities}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: "#136F63",
                  paddingVertical: 15,
                  paddingHorizontal: 25,
                  marginTop: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() =>
                  navigation.navigate("CityInformation", { city: item })
                }
              >
                <Text style={{ color: "#EAFFDA" }}>{item}</Text>

                <MaterialCommunityIcons
                  name="information-outline"
                  size={20}
                  color={"white"}
                  style={{ marginLeft: 20 }}
                />
              </TouchableOpacity>
            );
          }}
        />
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

export default NearbyCities;
