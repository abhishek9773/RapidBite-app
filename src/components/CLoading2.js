import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

function CLoading2(navigation) {
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
      <view>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Text style={{ fontSize: "bold" }}>Next</Text>
        </TouchableOpacity>
      </view>
    </View>
  );
}
const styles = StyleSheet.create({
  overlayImage: {},
  backgroundImage: {},
});

export default CLoading2;
