import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import HomePage from "./src/screens/Home";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#569751",
          inactiveTintColor: "#212121",
          style: {
            justifyContent: "center",
            backgroundColor: "#fff",
            elevation: 2
          },
          labelStyle: {
            textTransform: "uppercase",
            alignItems: "center",
            fontSize: 14
          },
          labelPosition: "beside-icon"
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Other"
          component={HomePage}
          options={{
            title: "Other",
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomePage}
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
