import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AppButton from "./app/componets/AppButton";
import AppText from "./app/componets/AppText";
import AppCard from "./app/componets/AppCard";

export default function App() {
  return (
    <MessagesScreen />
  );
}

const styles = StyleSheet.create({});
