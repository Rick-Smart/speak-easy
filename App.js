import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import AppButton from "./app/componets/AppButton";
import AppText from "./app/componets/AppText";
import AppCard from "./app/componets/AppCard";
import Screen from "./app/componets/Screen";
import AppIcon from "./app/componets/AppIcon";
import ListItem from "./app/componets/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    <ListingsScreen />
  );
}

const styles = StyleSheet.create({});
