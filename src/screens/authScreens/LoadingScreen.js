import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import CLoading from "../../components/CLoading";

function LoadingScreen() {
  return (
    // <View style={{ flex: 2 }}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper loop={false}>
        <CLoading />
        <CLoading />
      </Swiper>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    color: "red",
  },
});

export default LoadingScreen;
