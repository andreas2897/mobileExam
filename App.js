import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import LoginScreen from "./src/screen/LoginScreen";
import reducers from "./src/Redux/reducers";
import ReduxThunk from "redux-thunk";
import RootNavigator from "./src/Navigator/RootNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
