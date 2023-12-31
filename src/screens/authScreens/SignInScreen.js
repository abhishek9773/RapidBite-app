import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import CHeader from "../../components/CHeader";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";

export default function SignInScreen(navigation) {
  const [textInput2Fossued, setTextInput2Foscued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View>
      <CHeader title="MyACCOUNT" type="arrow-left" navigation={navigation} />
      {/* <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>SignUp</Text>
      </View> */}
      <View style={{ alignItems: "center", margin: 4 }}>
        <Image
          source={require("../../../assets/login/Mobile-login-via-phone-device.png")}
        />
      </View>
      <View>
        <View style={{ marginLeft: 16, marginBottom: 3 }}>
          <Text style={styles.textHeading}>Login</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={{ marginLeft: 16, marginBottom: 4 }}>
          <Text style={styles.textHeading}>Password</Text>
        </View>

        {/* this is password area */}
        <View style={styles.textInput1}>
          <TextInput
            style={[styles.inputCommonBox, { width: "88%" }]}
            placeholder="password"
            // this login comes from hocks.
            ref={textInput2}
            onFocus={() => {
              setTextInput2Foscued(false);
            }}
            onBlur={() => {
              setTextInput2Foscued(true);
            }}
          />

          <Animatable.View
            animation={textInput2Fossued ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              style={[styles.inputCommonBox, { marginRight: 0 }]}
              type="material"
              // color={{ color: colors.grey3 }}
              name="visibility-off"
            />
          </Animatable.View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View style={{ marginRight: 16 }}>
            <Text style={{ textAlign: "right", color: "blue", opacity: 0.9 }}>
              Forget password?
            </Text>
          </View>
        </TouchableOpacity>
        {/* <CButton title="login" direction="nothing" color="green" /> */}
      </View>

      {/* login button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigator("HomeScreen");
        }}
      >
        <View
          style={[styles.button, { backgroundColor: "#23F311", marginTop: 10 }]}
        >
          <Text style={styles.textButton}>Login</Text>
        </View>
      </TouchableOpacity>

      {/* May be Letter */}
      <TouchableOpacity onPress={() => {}}>
        <View style={[styles.button, { backgroundColor: "#29A7DD" }]}>
          <Text style={styles.textButton}>may be latter</Text>
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: 500, opacity: 0.6, fontSize: 16 }}>
          or continue with
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ margin: 5, marginRight: 20 }}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/login/login-google-image.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 5 }}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require("../../../assets/login/login-github-image.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "bold" }}> Don't have an account </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontWeight: "bold",
              textDecorationLine: "underline",
              color: "rgba(0, 26, 255, 0.80)",
            }}
          >
            Register?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    // borderColor: "#86939e",
    borderColor: "black",
    opacity: 0.6,
    marginHorizontal: 12,
    marginBottom: 10,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 4,
    paddingLeft: 10,
    // borde: 4,
  },
  textInput1: {
    borderWidth: 2,
    borderBlockColor: "#86939e",
    marginHorizontal: 12,
    // alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    // padding: 4,
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  inputCommonBox: {
    padding: 2,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.7,
  },
  forgetText: {
    textAlign: "left",
  },
  button: {
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 20,
  },
  textButton: {
    fontWeight: "bold",
    padding: 4,
    fontSize: 28,
  },
});
