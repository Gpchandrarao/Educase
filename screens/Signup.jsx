import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [isChcked, setIsChcked] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showError, setShowerror] = useState("");
  const [isShowError, setIsShowerror] = useState(false);
  return (
    <SafeAreaView style={{ padding: 24, height: "100%" }}>
      <View style={{ marginBottom: 26 }}>
        <Text
          style={{
            // color: " rgba(5, 5, 5, 1)",
            color: "#1877F2",
            fontSize: 48,
            fontWeight: "700",
            lineHeight: 72,
            marginBottom: 0,
          }}
        >
          Hello!
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: "rgba(78, 75, 102, 1)",
            lineHeight: 30,
          }}
        >
          signup to get Started
        </Text>
      </View>
      <View style={{ marginTop: 16, display: "flex", gap: 16 }}>
        <View>
          <Text
            style={{
              marginBottom: 5,
              color: "#4E4B66",
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Usename{" "}
            <Text style={{ color: "#C30052", fontSize: 14, fontWeight: "600" }}>
              *
            </Text>
          </Text>
          <TextInput style={styles.textInput} />
          {isShowError && (
            <Text style={{ color: "#C30052", fontSize: 14, fontWeight: "400" }}>
              {showError}
            </Text>
          )}
        </View>
        <View>
          <Text
            style={{
              marginBottom: 5,
              color: "#4E4B66",
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Password{" "}
            <Text style={{ color: "#C30052", fontSize: 14, fontWeight: "600" }}>
              *
            </Text>
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: 48,
              borderWidth: 2,
              borderRadius: 10,
              width: 320,
              padding: 10,
            }}
          >
            <TextInput
              secureTextEntry={secureTextEntry}
              value={password}
              onChange={(text) => setPassword(text)}
              style={{ height: "100%", width: "94%", fontSize: 20 }}
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            >
              <Icon
                name={secureTextEntry ? "eye-slash" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <CheckBox
            title="Remember me"
            checked={isChcked}
            onPress={() => setIsChcked(!isChcked)}
            containerStyle={styles.checkboxContainer}
            checkedColor="blue"
            uncheckedColor="gray"
          />
          <Text
            style={{
              color: "#5890FF",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 21,
            }}
          >
            Forgot the password?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 6,
            textTransform: "lowercase",
            backgroundColor: "#1877F2",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "rgba(255, 255, 255, 1)" }}>Login</Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "400",
            color: " #4E4B66",
          }}
        >
          or continue with
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#dedfdf",
            gap: 10,

            // backgroundColor: "red",
            width: 144,
            height: 48,
            paddingBottom: 12,
            paddingTop: 12,
            paddingRight: 20,
            paddingLeft: 16,
            borderRadius: 6,
            marginTop: 20,
          }}
        >
          <FontAwesome5 name="facebook" size={20} color="#18ACFE" />
          <Text style={{ color: "#667080", fontSize: 16, fontWeight: "600" }}>
            Facebook
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#dedfdf",
            gap: 10,
            width: 154,
            height: 48,
            paddingBottom: 12,
            paddingTop: 12,
            paddingRight: 24,
            paddingLeft: 16,
            borderRadius: 6,
            marginTop: 20,
          }}
        >
          <AntDesign name="google" size={24} color="#EB4335" />
          <Text style={{ color: "#667080", fontSize: 16, fontWeight: "600" }}>
            Google
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          textAlign: "center",
          marginTop: 16,
          color: "#4E4B66",
        }}
      >
        {/* com.news_app.NewsApp */}
        Already have an account ? {"  "}
        <Link
          to={{ screen: "Login" }}
          style={{ fontWeight: "600", color: "#1877F2", fontSize: 16 }}
        >
          Login
        </Link>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    borderWidth: 2,
    width: 320,
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    height: 45,
    width: 140,
    // paddingLeft: -20,
    color: " #4E4B66",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default Signup;
