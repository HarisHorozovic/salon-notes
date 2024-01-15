import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert, useColorScheme, View} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {encode as btoa} from 'base-64';
import CustomButton from '../CustomButton';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_UPLOAD_PRESET,
} from '@env';
import Text from '../Text';
import {imageUploaderStyles} from './style';
import {showMessage} from 'react-native-flash-message';
import {colors} from '../../styles';
import Icon from '../Icon';
// import { Entypo } from "@expo/vector-icons";

const ImageUploader = ({
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
  const isDarkMode = useColorScheme() === 'dark';

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
    try {
      const options: ImageLibraryOptions = {
        mediaType: 'photo',
        selectionLimit: 5,
      };
      const result: any = await launchImageLibrary(options);

      if (!result.didCancel) {
        setImages(result.assets);
      }
    } catch (error) {
      showMessage({message: error.message, type: 'danger'});
    }
  };

  return (
    <View>
      {!hideDefaultProgress && images && images.length > 0 && (
        <Text style={imageUploaderStyles.info_text}>
          Uploaded {uploadedImagesNumber} out of {images.length} images
        </Text>
      )}
      <CustomButton color="default" onPress={pickImage}>
        <View style={imageUploaderStyles.button_container}>
          {/*<Entypo name="image" size={24} color="black" />*/}
          <Icon
            iconProvider="entypo"
            name="image"
            color={
              isDarkMode
                ? colors.dark.button.danger.color
                : colors.light.button.danger.color
            }
          />
          <Text
            style={{
              ...imageUploaderStyles.button_text,
              color: isDarkMode
                ? colors.dark.button.danger.color
                : colors.light.button.danger.color,
            }}>
            New image
          </Text>
        </View>
      </CustomButton>
    </View>
  );
};

export default ImageUploader;
