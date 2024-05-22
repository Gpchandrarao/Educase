import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link } from "@react-navigation/native";
import { API_KEY } from "@env";
import axios from "axios";
import moment from "moment";

const AllTrending = () => {
  const [trendingAllData, setTrendingAllData] = useState([]);

  useEffect(() => {
    getFetchTrendingData();
  }, []);

  const getRelativeTime = (timestamp) => {
    return moment(timestamp).fromNow();
  };

  const getFetchTrendingData = async () => {
    try {
      const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-21&sortBy=publishedAt&apiKey=${API_KEY}`;
      const response = await axios.get(apiUrl);
      const formatedData = response.data.articles.map((eachData) => ({
        name: eachData.source.name,
        title: eachData.title,
        image: eachData.urlToImage,
        publishedTime: eachData.publishedAt,
      }));
      setTrendingAllData(formatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ padding: 24 }}>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600", color: "#000" }}>
          Trending
        </Text>
        <Link
          to={{ screen: "AllTrending" }}
          style={{ fontSize: 14, fontWeight: "400", color: "#4e4b66" }}
        >
          See all
        </Link>
      </View>
      <ScrollView>
        {trendingAllData.map((item, index) => (
          <View key={index} style={{ marginVertical: 10 }}>
            <Image
              source={{ uri: item.image }}
              style={{
                height: 150,
                width: "100%",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginBottom: 5,
                width: 324,
                marginTop: 5,
                height: 24,
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Image
                source={require("../assets/Ellipse.png")}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                }}
              />

              <Text
                style={{
                  marginTop: 5,
                  fontSize: 13,
                  fontWeight: "600",
                  color: "#4e4b66",
                }}
              >
                BBC News
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="time-outline" size={20} color="gray" />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                  }}
                >
                  {getRelativeTime(item.publishedTime)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllTrending;
