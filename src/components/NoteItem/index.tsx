import {TouchableOpacity, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../Card';
import Text from '../Text';
import {noteItemStyle} from './style';
import React from 'react';
import RemoveNote from '../RemoveNote';

export default function NoteItem({
  note,
  getNotes,
}: {
  note: any;
  key?: string | number;
  getNotes: (page: number, query?: string) => void;
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      containerStyle={{overflow: 'visible'}}
      onPress={() => {
        navigation.navigate('Detail' as any, note);
      }}>
      <Card style={noteItemStyle.note_container}>
        <View style={noteItemStyle.note_title}>
          <Text style={noteItemStyle.text}>{note.title}</Text>
          <RemoveNote id={note._id} getNotes={getNotes} />
        </View>
        <Image
          source={
            note.images && note.images[0] && typeof note.images[0] === 'string'
              ? {
                  uri: note.images[0] as any,
                }
              : require('../../../assets/broken-image.png')
          }
          style={{height: 80, width: undefined, aspectRatio: 1}}
        />
      </Card>
    </TouchableOpacity>
  );
}
