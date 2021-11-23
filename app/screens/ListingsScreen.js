import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../componets/Screen";
import AppCard from "../componets/AppCard";

import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../assets/Background-colors.png"),
  },
  {
    id: 2,
    title: "couch for sale",
    price: 400,
    image: require("../assets/Background-colors.png"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listItem) => listItem.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
