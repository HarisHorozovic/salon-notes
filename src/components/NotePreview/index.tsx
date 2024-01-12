import {View} from 'react-native';
import React from 'react';
import ImagePreview from '../ImagePreview';
import StepsPreview from '../StepsPreview';
import CustomButton from '../CustomButton';
import Card from '../Card';
import {notePreviewStyle} from './style';
import Text from '../Text';
// import { AntDesign } from "@expo/vector-icons";

export default function NotePreview({
  note,
  setIsEdit,
}: {
  note: any;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Card>
      <View style={notePreviewStyle.button_container}>
        <CustomButton
          color="primary"
          onPress={() => {
            setIsEdit(true);
          }}>
          <Text>Edit icon</Text>
          {/*<AntDesign*/}
          {/*  name="edit"*/}
          {/*  size={24}*/}
          {/*  color="#fff"*/}
          {/*  style={{marginRight: 2}}*/}
          {/*/>*/}
        </CustomButton>
      </View>
      <Text style={notePreviewStyle.title}>{note.title}</Text>
      <ImagePreview images={note.images} />
      <StepsPreview steps={note.steps} />
      <Text>{note.description}</Text>
    </Card>
  );
}
