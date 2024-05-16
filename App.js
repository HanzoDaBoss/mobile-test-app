import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";

import { useState } from "react";

const PlaceholderImage = require(`./assets/alec.png`);

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You didn't select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <Text
        style={{
          color: "blue",
          textAlign: "center",
        }}
      >
        Oh I love Hockey so much
      </Text>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Press if you like hockey"
          dislike=""
          onPress={pickImageAsync}
        />
        <Button label="Press if you don't like hockey" dislike="don't" />
      </View>
      <StatusBar style="auto" />
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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
