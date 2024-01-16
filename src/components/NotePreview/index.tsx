import {useColorScheme, View} from 'react-native';
import React from 'react';
import ImagePreview from '../ImagePreview';
import StepsPreview from '../StepsPreview';
import CustomButton from '../CustomButton';
import Card from '../Card';
import {notePreviewStyle} from './style';
import Text from '../Text';
import Icon from '../Icon';
import {colors} from '../../styles';
import RemoveNote from '../RemoveNote';

export default function NotePreview({
  note,
  setIsEdit,
}: {
  note: any;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Card>
      <View style={notePreviewStyle.button_container}>
        <RemoveNote id={note._id} to={'Home'} />
        <CustomButton
          color="primary"
          onPress={() => {
            setIsEdit(true);
          }}>
          <Icon
            iconProvider="antdesign"
            name="edit"
            style={{marginRight: 2}}
            color={
              isDarkMode
                ? colors.dark.button.primary.color
                : colors.light.button.primary.color
            }
          />
        </CustomButton>
      </View>
      <Text style={notePreviewStyle.title}>{note.title}</Text>
      <ImagePreview images={note.images} />
      <StepsPreview steps={note.steps} />
      <Text>{note.description}</Text>
    </Card>
  );
}
