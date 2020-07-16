import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./Homestack";
import ProfileScreen from "../screen/ProfieScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Icon } from "native-base";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: Colors.primaryColor,
        style: { backgroundColor: "#20242F", borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type="Entypo" name="home" style={{ color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type="MaterialIcons" name="reastaurant" style={{ color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
