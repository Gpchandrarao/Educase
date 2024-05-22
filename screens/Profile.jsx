import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { launchImageLibrary } from "react-native-image-picker";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();

  const handleChoosePhoto = () => {
    const options = {
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorCode);
      } else {
        const source = response.assets[0].uri;
        setImageUri(source);
      }
    });
  };

  return (
    <SafeAreaView style={{ padding: 20, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-left"
          size={20}
          color="#4E4B66"
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          Fill your Profile
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
            <Text style={styles.buttonText}>Choose Photo</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/Frame.png")}
          style={{ position: "relative", top: -30, left: 40 }}
        />
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text>Username</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Full Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text>
            Email Address <Text style={styles.requiredField}>*</Text>
          </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text>
            Phone Number <Text style={styles.requiredField}>*</Text>
          </Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#c6c8ca",
    padding: 10,
    borderRadius: 70,
    height: 140,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },

  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 2,
    paddingHorizontal: 10,
  },
  requiredField: {
    color: "#C30052",
    fontSize: 14,
    fontWeight: "600",
  },
  nextButton: {
    borderRadius: 8,
    backgroundColor: "#1877F2",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Profile;
