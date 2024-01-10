import {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert, Text, View} from 'react-native';
// import * as ImagePicker from "expo-image-picker";
import {encode as btoa} from 'base-64';
import CustomButton from './CustomButton';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_UPLOAD_PRESET,
} from '@env';
// import { Entypo } from "@expo/vector-icons";

const CloudinaryUploader = ({
  onStart,
  onProgress,
  onDone,
  hideDefaultProgress,
}: {
  onStart?: () => void;
  onProgress?: (uploadedNumber, numberOfImagesToUpload) => void;
  onDone?: (images: any) => void;
  hideDefaultProgress?: boolean;
}) => {
  const [images, setImages] = useState(null);
  const [uploadedImagesNumber, setUploadedImagesNumber] = useState<number>(0);

  useEffect(() => {
    uploadImage().then();
    //   eslint-disable-next-line
  }, [images]);

  const uploadImage = async () => {
    if (images && images.length > 0) {
      onStart && onStart();
      const uploadedImagesTemp = [];
      for (let i = 0; i < images.length; i++) {
        try {
          const cloudName = CLOUDINARY_CLOUD_NAME;
          const apiKey = CLOUDINARY_API_KEY;
          const apiSecret = CLOUDINARY_API_SECRET;

          const image = images[i];
          const formData = new FormData();
          formData.append('file', {
            uri: image.uri,
            type: 'image/jpeg',
            name: 'myImage',
          });
          formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
              },
            },
          );

          // Handle the response from Cloudinary
          uploadedImagesTemp.push(response.data);
          onProgress && onProgress(uploadedImagesTemp.length, images.length);
          setUploadedImagesNumber(uploadedImagesTemp.length);
        } catch (error) {
          console.error(
            `Error uploading image: ${i + 1} out of ${images.length}`,
            error,
          );
          Alert.alert(
            'Upload failed',
            'Error uploading image. Please try again.',
          );
        }
      }
      onDone && onDone(uploadedImagesTemp);
      setImages(null);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // let result: any = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: false,
    //   allowsMultipleSelection: true,
    //   // aspect: [4, 3],
    //   quality: 1,
    //   selectionLimit: 3,
    // });
    //
    // if (!result.canceled) {
    //   setImages(result.assets);
    // }
  };

  return (
    <View>
      {!hideDefaultProgress && images && images.length > 0 && (
        <Text style={{marginVertical: 10, fontWeight: 'bold'}}>
          Uploaded {uploadedImagesNumber} out of {images.length} images
        </Text>
      )}
      <CustomButton color="default" onPress={pickImage}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/*<Entypo name="image" size={24} color="black" />*/}
          <Text style={{marginLeft: 5}}>New image</Text>
        </View>
      </CustomButton>
    </View>
  );
};

export default CloudinaryUploader;
