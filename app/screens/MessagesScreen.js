import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../componets/Screen";
import ListItem from "../componets/ListItem";
import ListItemSeparator from "../componets/ListItemSeparator";
import ListItemDeleteAction from "../componets/ListItemDeleteAction";

const initialMessags = [
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
            subtitle={item.description}
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
