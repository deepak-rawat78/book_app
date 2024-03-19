import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {screenName} from "./routeUtils";
import Home from "../screens/home/Home";
import BookDetail from "../screens/bookDetail/BookDetail";

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenName.HOME} component={Home} />
      <Stack.Screen name={screenName.DETAIL} component={BookDetail} />
    </Stack.Navigator>
  );
};

export default index;
