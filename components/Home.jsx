import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView style={{ padding: 24 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Vector.png")}
          style={{ height: 30, width: 99 }}
        />
        <View
          style={{
            shadowColorfg: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: "#fff",
            width: 35,
            height: 32,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="notifications-outline" size={30} color="black" />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          marginTop: 42,
          borderRadius: 8,
          paddingHorizontal: 10,
          backgroundColor: "#f0f0f0",
          borderColor: "gray",
          borderWidth: 2,
          borderRadius: 6,
          width: 309,
          height: 48,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Ionicons
            name="search-outline"
            size={20}
            color="#000"
            style={{ color: "#4E4B66", width: 20.31, height: 20.31 }}
          />
          <TextInput
            placeholder="Search"
            style={{
              color: "#4E4B66",
              width: "80%",
              fontSize: 16,
              fontWeight: "600",
            }}
          />
        </View>
        <MaterialIcons name="tune" size={24} color="#4E4B66" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
