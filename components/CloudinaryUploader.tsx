import { useState } from "react";
import axios from "axios";
import { Alert, Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { encode as btoa } from "base-64";

const CloudinaryUploader = () => {
  const [image, setImage] = useState(null);

  const uploadImage = async () => {
    try {
      const cloudName = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const apiKey = process.env.EXPO_PUBLIC_CLOUDINARY_API_KEY;
      const apiSecret = process.env.EXPO_PUBLIC_CLOUDINARY_API_SECRET;

      const formData = new FormData();
      formData.append("file", {
        uri: image.uri,
        type: "image/jpeg",
        name: "myImage",
      });
      formData.append(
        "upload_preset",
        process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
          },
        }
      );

      // Handle the response from Cloudinary
      console.log("Upload success:", response.data);
      Alert.alert("Upload success", "Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      Alert.alert("Upload failed", "Error uploading image. Please try again.");
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      // aspect: [4, 3],
      // quality: 1,
    });

    console.log(
      "____________________________________________________________________________________"
    );
    console.log(result);
    console.log(
      "____________________________________________________________________________________"
    );

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <View>
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Upload Image" onPress={uploadImage} />
    </View>
  );
};

export default CloudinaryUploader;
