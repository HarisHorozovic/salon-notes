import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { encode as btoa } from "base-64";

const CloudinaryUploader = () => {
  const [images, setImages] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    uploadImage().then();
  }, [images]);

  const uploadImage = async () => {
    if (images && images.length > 0) {
      const uploadedImagesTemp = [];
      for (let i = 0; i < images.length; i++) {
        try {
          const cloudName = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME;
          const apiKey = process.env.EXPO_PUBLIC_CLOUDINARY_API_KEY;
          const apiSecret = process.env.EXPO_PUBLIC_CLOUDINARY_API_SECRET;

          const image = images[i];
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
          uploadedImagesTemp.push(response.data);
          Alert.alert(
            "Upload success",
            `Image ${i + 1} out of ${images.length} uploaded successfully!`
          );
        } catch (error) {
          console.error(
            `Error uploading image: ${i + 1} out of ${images.length}`,
            error
          );
          Alert.alert(
            "Upload failed",
            "Error uploading image. Please try again."
          );
        }
      }
      setUploadedImages(uploadedImagesTemp);
      setImages(null);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      // aspect: [4, 3],
      quality: 1,
      selectionLimit: 3,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  const ImagePreviewComp = ({
    images,
    isUploaded,
  }: {
    images: any[];
    isUploaded: boolean;
  }) => {
    return images && images.length > 0 ? (
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {images.map((image: any, index: number) => (
          <Image
            key={index}
            source={{ uri: isUploaded ? image.url : image.uri }}
            style={{ width: 100, height: 100 }}
          />
        ))}
      </View>
    ) : null;
  };
  return (
    <View>
      <ImagePreviewComp
        images={images && images.length ? images : uploadedImages}
        isUploaded={images && images.length > 0 ? false : true}
      />
      <Button title="Pick Image" onPress={pickImage} />
    </View>
  );
};

export default CloudinaryUploader;
