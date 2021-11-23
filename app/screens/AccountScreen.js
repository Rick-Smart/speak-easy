import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../componets/Screen";
import ListItem from "../componets/ListItem";
import AppIcon from "../componets/AppIcon";
import ListItemSeparator from "../componets/ListItemSeparator";

import colors from "../config/colors";

const menuItems = [
  {
    title: "my Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Rick"
          subTitle="rick-s@hotmail.com"
          image={require("../assets/speak-easy-logo.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      
        <ListItem 
        title="log Out"
        IconComponent={
        <AppIcon 
        name="logout"
        backgroundColor={colors.logout}
        />}
        />
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20,
  },
  logoutContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  menuContainer: {
    paddingTop: 10,
  },
});
