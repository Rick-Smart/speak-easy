import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35}/>
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
      </View>
      <Image
        resizeMode="contain"
        style={styles.images}
        source={{
          uri: "https://149510960.v2.pressablecdn.com/wp-content/uploads/modern-stainless-home-bar.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  images: {
    width: "100%",
    height: "100%",
  },
});
