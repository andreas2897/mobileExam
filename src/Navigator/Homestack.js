import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
import { useDispatch, useSelector } from "react-redux";

const Stack = createStackNavigator();

export default () => {
  const userSelector = useSelector((state) => state.user);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{ title: userSelector.username }}
      />
      <Stack.Screen
        component={DetailScreen}
        name="Detail"
        options={{ title: userSelector.restaurant }}
      />
    </Stack.Navigator>
  );
};
