import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import { FavouritesContext } from "../components/WelcomeScreen";

const FindCity = () => {
  const { favourites, setFavourites } = React.useContext(FavouritesContext);

  return (
    <ImageBackground
      style={{
        justifyContent: "center",
        paddingHorizontal: 60,
        height: "100%",
      }}
      source={require("../utils/wallpaper.jpg")}
    >
      <FlatList
        style={{ top: 100 }}
        data={favourites}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </ImageBackground>
  );
};

export default FindCity;
