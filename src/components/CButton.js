import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function CButton({ title, direction, color }) {
  console.log();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          direction;
        }}
      >
        <View style={styles.button}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = (color) =>
  StyleSheet.create({
    button: {
      marginHorizontal: 16,
      height: 38,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color,
    },
  });

export default CButton;
