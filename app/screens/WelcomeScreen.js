import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/Background-colors.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/speak-easy-logo.png")}
        />
        <Text style={styles.tagLine}>Come Find Us</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          color="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
