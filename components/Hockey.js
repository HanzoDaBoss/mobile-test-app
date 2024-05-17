import ImageViewer from "./ImageViewer";
import Button from "./Button";

import * as ImagePicker from "expo-image-picker";

import { StyleSheet, View } from "react-native";

export default function Hockey({
  placeholderImageSource,
  selectedImage,
  setSelectedImage,
}) {
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImageSource}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Press if you like hockey"
          dislike=""
          onPress={pickImageAsync}
        />
        <Button label="Press if you don't like hockey" dislike="don't" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    paddingBottom: 30,
    alignItems: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
