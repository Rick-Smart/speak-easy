import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "../navigation/routes";

const Stack = createStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={routes.USER} component={AccountScreen} />
    <Stack.Screen
      name={routes.MESSAGES}
      component={MessagesScreen}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);
