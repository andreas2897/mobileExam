import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button/Button";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 30,
  },
});

export default ({ navigation }) => {
  const userSelector = useSelector((state) => state.user);
  const [postCount, setPostCount] = useState(0);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    AsyncStorage.removeItem("userData")
      .then((result) => {
        dispatch({
          type: "USER_LOGOUT",
        });
        console.log("LOGOUT");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{ marginTop: 100 }}>
      <Button onPress={logoutHandler} type="secondary" size="md" container>
        LOGOUT
      </Button>
    </View>
  );
};
