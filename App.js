import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/Ionicons";

import OnboardingScreen from "./screens/Onboarding";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./components/Home";
import Explore from "./screens/Explore";
import Bookmark from "./screens/Bookmark";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const StackScreen = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icoName;

          if (route.name === "Home") {
            icoName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            icoName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Bookmark") {
            icoName = focused ? "bookmark" : "bookmark-outline";
          } else if (route.name === "Profile") {
            icoName = focused ? "person" : "person-outline";
          }

          return <Icon name={icoName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1877F2",
        tabBarInactiveTintColor: "gray",
        tabBarBadgeStyle: {
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          fontSize: 12,
          fontWeight: "700",
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <StackScreen.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
