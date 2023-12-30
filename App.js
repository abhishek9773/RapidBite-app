import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import SignInScreen from "./src/screens/authScreens/SignInScreen";
import { colors } from "./src/global/styles";

function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.statusbar}
      />
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
