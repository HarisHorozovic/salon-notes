import {Image, View} from 'react-native';
import React from 'react';
import {NoteItem} from '../../types';
// import { FontAwesome } from "@expo/vector-icons";
import CustomButton from '../CustomButton';
import Text from '../Text';
import {formImagePreviewStyles} from './style';

export default function FormImagePreview({
  images,
  setNewNote,
  newNote,
}: {
  images: string[];
  setNewNote: React.Dispatch<React.SetStateAction<NoteItem>>;
  newNote: NoteItem;
}) {
  return images && images.length > 0 ? (
    <View style={formImagePreviewStyles.main_container}>
      {images.map((uri: any, index: number) => (
        <View key={index} style={formImagePreviewStyles.image_container}>
          <Image
            key={index}
            source={
              typeof uri === 'string'
                ? {uri}
                : require('../../../assets/broken-image.png')
            }
            style={formImagePreviewStyles.image}
          />
          <CustomButton
            color="danger"
            onPress={() => {
              const imgs = images ? [...images] : [];

              imgs.splice(index, 1);

              setNewNote({...newNote, images: imgs});
            }}>
            <Text>Remove icon</Text>
            {/*<FontAwesome name="remove" size={14} color="#fff" />*/}
          </CustomButton>
        </View>
      ))}
    </View>
  ) : null;
}