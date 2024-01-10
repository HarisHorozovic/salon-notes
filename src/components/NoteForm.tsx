import {ScrollView, TextInput, Text} from 'react-native';
import {useState} from 'react';
import CloudinaryUploader from './CloudinaryUploader';
import styles from '../styles';
import {NoteItem, NoteItemStep} from '../types';
import StepsInput from './StepsInput';
import CustomButton from './CustomButton';
import FormImagePreview from './FormImagePreview';
import {createNote} from '../api/notes';
import {useNavigation} from '@react-navigation/native';

export default function NoteForm({note}: {note: any}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [newNote, setNewNote] = useState<NoteItem>(
    note || {
      title: '',
      // images: [],
      images: [
        'https://res.cloudinary.com/akanotenshi/image/upload/v1704890949/salon_app/hvo0v7ydlg1lgswbnplv.jpg',
        'https://res.cloudinary.com/akanotenshi/image/upload/v1704891001/salon_app/otgq5lahm47u1tttp4yw.jpg',
        'https://res.cloudinary.com/akanotenshi/image/upload/v1704891046/salon_app/h0t6qqh7mwhvc7nowebw.jpg',
      ],
      steps: [],
      description: '',
    },
  );

  const navigation = useNavigation();

  return (
    <ScrollView style={{...styles.card, margin: 10}}>
      {/* title */}
      <TextInput
        style={styles.input_base}
        placeholder="Title"
        onChangeText={value => {
          setNewNote({...newNote, title: value});
        }}
        defaultValue={newNote.title}
      />
      {/* images */}
      <FormImagePreview
        images={newNote.images || []}
        setNewNote={setNewNote}
        newNote={newNote}
      />
      <CloudinaryUploader
        onDone={images => {
          const uploaded = images?.map((image: any) => image.secure_url);

          const newImages = [...newNote.images, ...uploaded];

          setNewNote({...newNote, images: newImages});
        }}
      />

      {/* steps */}
      {newNote.steps?.map((step: NoteItemStep, index: number) => (
        <StepsInput
          key={index}
          value={step}
          index={index}
          setValue={(index, key, value) => {
            const note = {...newNote};
            if (note.steps) {
              const step = {...note.steps[index]};

              step['key'] = key as string;
              step['value'] = value as string;

              note.steps[index] = step;

              setNewNote(note);
            }
          }}
          onRemove={index => {
            const steps = newNote.steps ? [...newNote.steps] : [];

            steps.splice(index, 1);

            setNewNote({...newNote, steps});
          }}
        />
      ))}
      <CustomButton
        color="default"
        label="New step"
        onPress={() => {
          setNewNote({
            ...newNote,
            steps: [...newNote.steps, {key: '', value: ''}],
          });
        }}
      />
      {/* description */}
      <TextInput
        style={[styles.input_base, styles.text_area]}
        placeholder="Description"
        onChangeText={value => {
          setNewNote({...newNote, description: value});
        }}
        defaultValue={newNote.description}
        multiline
        numberOfLines={4}
      />

      <CustomButton
        color="primary"
        label={loading ? 'Saving' : 'Save'}
        disabled={loading}
        onPress={async () => {
          setLoading(true);
          try {
            await createNote(newNote);
            navigation.navigate('Home' as any);
          } catch (err) {
            console.log(
              '____________________________________________________________________________________',
            );
            console.log('create err', err);
            console.log(
              '____________________________________________________________________________________',
            );
          }
          setLoading(false);
        }}
      />
      <Text></Text>
    </ScrollView>
  );
}
