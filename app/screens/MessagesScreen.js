import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import Constants from "expo-constants";

import ListItem from "../componets/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/speak-easy-logo.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/speak-easy-logo.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/speak-easy-logo.png"),
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
