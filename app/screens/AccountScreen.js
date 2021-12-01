import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import AppIcon from "../components/AppIcon";
import ListItemSeparator from "../components/lists/ListItemSeparator";

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
          onPress={() => console.log("account details")}
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
              onPress={() => console.log(item.title)}
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
        onPress={() => console.log("log out")}
        IconComponent={
          <AppIcon name="logout" backgroundColor={colors.logout} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
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
