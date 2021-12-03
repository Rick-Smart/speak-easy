import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  // console.log(listing);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>$ {listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/speak-easy-logo.png")}
            title="Rick"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
