import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button/Button";
import { Icon } from "native-base";
const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: height * (314 / 812),
  },
  bgImage: {
    flex: 1,
  },
});

export default ({ navigation }) => {
  const [username, setUsername] = useState("");
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loginButtonHandler = () => {
    AsyncStorage.setItem("userData", username)
      .then((res) => {
        dispatch({
          type: "USER_LOGIN",
          payload: { username },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View
      style={{
        borderRadius: 22,
        paddingVertical: 11,
        paddingHorizontal: 20,
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 34, lineHeight: 40 }}>Tomato App</Text>
      <Icon type="MaterialCommunityIcons" name="food" />
      <TextInput
        style={{
          fontSize: 17,
          lineHeight: 19,
        }}
        placeholder="username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button onPress={loginButtonHandler} containerStyle={{ marginTop: 40 }}>
        Login
      </Button>
    </View>
  );
};
