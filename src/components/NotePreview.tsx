import {Text, View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../styles';
import ImagePreview from './ImagePreview';
import StepsPreview from './StepsPreview';
import CustomButton from './CustomButton';
// import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    ...colors.light,
    borderRadius: 2,
    elevation: 5,
    margin: 10,
    padding: 10,
  },
  button_container: {
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default function NotePreview({
  note,
  setIsEdit,
}: {
  note: any;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
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
      <Text style={styles.title}>{note.title}</Text>
      <ImagePreview images={note.images} />
      <StepsPreview steps={note.steps} />
      <Text>{note.description}</Text>
    </View>
  );
}
