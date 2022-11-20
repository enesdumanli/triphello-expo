import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NearbyCities = ({ route, navigation }) => {
  const { nearbyCities } = route.params;

  console.log(route);
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("TabNavigationHandler")}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color={"black"} />
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(nearbyCities)}</Text>
    </View>
  );
};

export default NearbyCities;
