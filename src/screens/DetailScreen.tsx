import React, {useState} from 'react';
import {View} from 'react-native';
import NoteForm from '../components/NoteForm';
import NotePreview from '../components/NotePreview';
import AppLayout from '../components/HOC/AppLayout';

const DetailScreen = ({route}) => {
  const [isEdit, setIsEdit] = useState(!route.params);
  const note = route.params;

  return (
    <AppLayout>
      <View>
        {isEdit ? (
          <NoteForm note={note} />
        ) : (
          <NotePreview note={note} setIsEdit={setIsEdit} />
        )}
      </View>
    </AppLayout>
  );
};

export default DetailScreen;
