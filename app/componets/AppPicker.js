import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(!showModal)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setShowModal(!showModal)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
