import Button from "./components/Button";
import Hockey from "./components/Hockey";

import { StatusBar } from "expo-status-bar";

import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PlaceholderImage = require(`./assets/alec.png`);

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.container}>
      <Hockey
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        placeholderImageSource={PlaceholderImage}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
