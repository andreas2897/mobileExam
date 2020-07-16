import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Colors from "../constants/Colors";
import PostCard from "./PostCard";
import Axios from "axios";
import { API_URL } from "../constants/API";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});

export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        console.log(res.data);
        setPostList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPosts = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <FlatList data={postList} renderItem={renderPosts} />
    </View>
  );
};
