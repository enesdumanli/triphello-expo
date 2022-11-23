import React from "react";
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FavouritesContext } from "./TabNavigationHandler";
import { SvgUri } from "react-native-svg";

const Favourites = ({ navigation }) => {
  const { favourites, setFavourites } = React.useContext(FavouritesContext);

  function renderItem(item) {
    return (
      <TouchableOpacity
        style={{
          padding: 20,
          margin: 5,
          backgroundColor: "#DBD56E",
          borderRadius: 12,
        }}
        onPress={() => navigation.navigate("CityInformation", { city: item })}
      >
        <Text style={{ color: "#2D93AD", textAlign: "center" }}>{item}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#4C6663",
            paddingHorizontal: 5,
            borderRadius: 8,
          }}
          onPress={() => {
            setFavourites(favourites.filter((itemMap) => itemMap !== item));
          }}
        >
          <Text style={{ color: "white" }}>x</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground
      style={{
        justifyContent: "center",
        paddingHorizontal: 60,
        height: "100%",
      }}
      source={require("../utils/wallpaper.jpg")}
    >
      <SvgUri
        style={{ alignSelf: "center", top: 51 }}
        width="100"
        height="100"
        uri="https://svgshare.com/i/oBX.svg"
      />
      <FlatList
        style={{ top: 100 }}
        data={favourites}
        renderItem={({ item }) => renderItem(item)}
      />
    </ImageBackground>
  );
};

export default Favourites;
