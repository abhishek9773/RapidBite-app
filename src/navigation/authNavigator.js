import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SignInScreen from "../screens/authScreens/SignInScreen";
import LoadingScreen from "../screens/authScreens/LoadingScreen";
import HomeScreen from "../screens/authScreens/HomeScreen";

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      {/* <Auth.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      /> */}
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShow: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
