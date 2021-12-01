import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import AppCard from "./app/components/AppCard";
import Screen from "./app/components/Screen";
import AppIcon from "./app/components/AppIcon";
import ListItem from "./app/components/lists/ListItem";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {


 

  return (
   <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  button: {
    width: "100%",
    height: 100,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});
