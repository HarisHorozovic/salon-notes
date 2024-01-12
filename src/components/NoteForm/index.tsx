import {useState} from 'react';
import {NoteItem, NoteItemStep} from '../../types';
import StepsInput from '../StepsInput';
import CustomButton from '../CustomButton';
import FormImagePreview from '../FormImagePreview';
import {createNote} from '../../api/notes';
import {useNavigation} from '@react-navigation/native';
import Input from '../Input';
import Card from '../Card';
import Text from '../Text';
import getStyle from '../../styles';
import ImageUploader from '../ImageUploader';
import {showMessage} from 'react-native-flash-message';

export default function NoteForm({note}: {note: any}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [newNote, setNewNote] = useState<NoteItem>(
    note || {
      title: '',
      // images: [],
      images: [],
      steps: [],
      description: '',
    },
  );

  const navigation = useNavigation();

  return (
    <Card style={{margin: 10}} scroll>
      {/* title */}
      <Input
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
      <ImageUploader
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
      <Input
        style={getStyle(false).text_area}
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
            showMessage({
              message: 'Something went wrong creating note, please try again',
              type: 'danger',
            });
          }
          setLoading(false);
        }}
      />
      <Text></Text>
    </Card>
  );
}
