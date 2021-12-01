import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessags = [
  {
    id: 1,
    title: "Rick",
    description: "Get back to work",
    image: require("../assets/speak-easy-logo.png"),
  },
  {
    id: 2,
    title: "Amber",
    description: "I don't want to",
    image: require("../assets/speak-easy-logo.png"),
  },
  {
    id: 3,
    title: "Rick",
    description: "Too bad",
    image: require("../assets/speak-easy-logo.png"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessags);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessags);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
