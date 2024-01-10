import {Image, Text, View} from 'react-native';
import React from 'react';
import {NoteItem} from '../types';
// import { FontAwesome } from "@expo/vector-icons";
import CustomButton from './CustomButton';

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
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 5,
        justifyContent: 'center',
      }}>
      {images.map((uri: any, index: number) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Image
            key={index}
            source={
              typeof uri === 'string'
                ? {uri}
                : require('../../assets/broken-image.png')
            }
            style={{
              width: 180,
              marginVertical: 5,
              height: undefined,
              aspectRatio: 1,
              marginRight: images.length - 1 === index ? 10 : 0,
            }}
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
