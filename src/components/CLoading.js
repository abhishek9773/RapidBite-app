import { View, Image, StyleSheet } from "react-native";

function CLoading() {
  return (
    <View>
      <Image
        style={styles.backgroundImage}
        source={require("../../assets/on-boarding/first-onboarding-image.png")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 16,
        }}
      >
        <Image
          style={styles.overlayImage}
          source={require("../../assets/on-boarding/left-arrow-image.png")}
        />
        <Image
          style={styles.overlayImage}
          source={require("../../assets/on-boarding/right-arrow-imags.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayImage: {},
});

export default CLoading;
