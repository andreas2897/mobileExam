import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";

import Axios from "axios";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default (props) => {
  const { restaurantDetail } = props.route.params;
  console.log("POST DETAIL: ", restaurantDetail);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView />

      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text>{restaurantDetail.restaurantName}</Text>
        <Image
          source={{
            uri: restaurantDetail.image,
          }}
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            width: width - 30,
            height: width - 30,
          }}
          width={width - 30}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ ...styles.commentContainer }}>
          <Text size="sm" style={{ height: null }}>
            {" "}
            Rating : {restaurantDetail.rating}
          </Text>
          <Text size="sm" style={{ height: null }}>
            {" "}
            Address : {restaurantDetail.address}
          </Text>
          <Text size="sm" style={{ height: null }}>
            {" "}
            Cuisine : {restaurantDetail.cuisine}
          </Text>
          <Text size="sm" style={{ height: null }}>
            {" "}
            open : {restaurantDetail.openTime} - {restaurantDetail.closeTime}{" "}
          </Text>
          <Text size="sm" style={{ height: null }}>
            {" "}
            Cost for 2 : TL {restaurantDetail.costForTwo}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
