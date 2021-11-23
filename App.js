import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  TextInput,
  Switch,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppButton from "./app/componets/AppButton";
import AppText from "./app/componets/AppText";
import AppCard from "./app/componets/AppCard";
import Screen from "./app/componets/Screen";
import AppIcon from "./app/componets/AppIcon";
import ListItem from "./app/componets/ListItem";
import AppTextInput from "./app/componets/AppTextInput";
import AppPicker from "./app/componets/AppPicker";

export default function App() {
  const [selected, setSelected] = useState(false);

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category"/>
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}

const styles = StyleSheet.create({});
