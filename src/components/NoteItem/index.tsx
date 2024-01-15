import {TouchableOpacity, Image, View, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../Card';
import Text from '../Text';
import {noteItemStyle} from './style';
import CustomButton from '../CustomButton';
import Icon from '../Icon';
import {colors} from '../../styles';
import React from 'react';
import {deleteNote} from '../../api/notes.ts';
import {showMessage} from 'react-native-flash-message';

export default function NoteItem({
  note,
  getNotes,
}: {
  note: any;
  key?: string | number;
  getNotes: (page: number, query?: string) => void;
}) {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      containerStyle={{overflow: 'visible'}}
      onPress={() => {
        navigation.navigate('Detail' as any, note);
      }}>
      <Card style={noteItemStyle.note_container}>
        <View style={noteItemStyle.note_title}>
          <Text style={noteItemStyle.text}>{note.title}</Text>
          <CustomButton
            color="danger"
            onPress={async () => {
              const res = await deleteNote(note._id);

              if (res) {
                showMessage({message: 'Note deleted', type: 'success'});
                getNotes(1);
              } else {
                showMessage({
                  message:
                    'Something went wrong deleting note, please try again',
                  type: 'danger',
                });
              }
            }}>
            <Icon
              iconProvider="fontawesome"
              name="remove"
              color={
                isDarkMode
                  ? colors.dark.button.danger.color
                  : colors.light.button.danger.color
              }
            />
          </CustomButton>
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
