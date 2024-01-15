import {Alert, useColorScheme} from 'react-native';
import {deleteNote} from '../../api/notes.ts';
import {showMessage} from 'react-native-flash-message';
import Icon from '../Icon';
import {colors} from '../../styles';
import CustomButton from '../CustomButton';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function RemoveNote({
  id,
  to,
  getNotes,
}: {
  id: string;
  to?: string;
  getNotes?: (page: number, query?: string) => void;
}) {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const onRemoveNote = async () => {
    Alert.alert(
      'Are you sure you want to delete this note?',
      'This action is irreversible',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const res = await deleteNote(id);

            if (res) {
              showMessage({message: 'Note deleted', type: 'success'});
              getNotes && getNotes(1);
              to && navigation.navigate(to);
            } else {
              showMessage({
                message: 'Something went wrong deleting note, please try again',
                type: 'danger',
              });
            }
          },
        },
      ],
    );
  };

  return (
    <CustomButton
      color="danger"
      onPress={() => {
        onRemoveNote().then();
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
  );
}
