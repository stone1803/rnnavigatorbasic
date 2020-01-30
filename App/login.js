import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  Button,
  Alert
} from "react-native";
import bgImg from "../img/bg.jpg"
const { width: rong } = Dimensions.get("window");
export default class Login extends Component {
  render() {
    return (
      <ImageBackground source={bgImg} style={styles.ImageBackground}>
        <View>
          <Text style={styles.TextLogin}>VANTHIEN.COM</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"#ff8c00"}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            placeholderTextColor={"#ff8c00"}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title="LOGIN"
            color="#f194ff"
            onPress={() => Alert.alert("Dang nhap thanh cong")}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ImageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  TextLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff8c00"
  },
  input: {
    width: rong - 55,
    height: 35,
    borderRadius: 25,
    fontSize: 15,
    marginTop: 10,
    paddingLeft: 45,
    color: "#ff8c00",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  bntLogin: {
    width: rong - 55
  }
});
