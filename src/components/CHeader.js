import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";

export default function CHeader({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.rapper}>
        <View style={{ marginRight: 20 }}>
          <Icon
            type="material-comunity"
            name={type}
            color={colors.headerText}
            size={38}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.button,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 26,
    fontWeight: "bold",
    alignItems: "center",
  },
  rapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
