import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function AppText({ children, style }) {
  return <Text style={[styles.appText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  appText: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 20,
      },
    }),
  },
});
