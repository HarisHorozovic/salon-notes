import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../Card';

const noteItemStyle = StyleSheet.create({
  note_container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    alignItems: 'flex-start',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    fontWeight: 'bold',
  },
});
export default function NoteItem({note}: {note: any; key?: string | number}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      containerStyle={{overflow: 'visible'}}
      onPress={() => {
        navigation.navigate('Detail' as any, note);
      }}>
      <Card style={noteItemStyle.note_container}>
        <Text style={noteItemStyle.text}>{note.title}</Text>
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
