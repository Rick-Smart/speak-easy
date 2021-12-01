import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

export default function AppCard({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.cardText}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardText: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
