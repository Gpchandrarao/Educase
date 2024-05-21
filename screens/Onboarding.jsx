import React from "react";
import { View,  StyleSheet, Image,  } from "react-native";
import Swiper from "react-native-swiper";
const OnboardingScreen = ({ navigation }) => {
  const handleIndexChanged = () => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 3500);
  };

  return (
    <Swiper
      style={styles.wrapper}
      showsPagination={true}
      loop={false}
      onIndexChanged={handleIndexChanged()}
    >
      <View style={styles.slide}>
        <Image source={require("../assets/Vector.png")} style={styles.image} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
