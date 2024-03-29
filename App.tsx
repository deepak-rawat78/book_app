import {View, Text} from "react-native";
import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navigator from "./src/routes";
import routes from "./src/routes";

const Stack = createNativeStackNavigator();
const App = () => {
  return <NavigationContainer>{routes()}</NavigationContainer>;
};

export default App;
