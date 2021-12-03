import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";


import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
